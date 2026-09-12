import { createHmac } from "node:crypto";
import { NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebase/admin";
import { FIRESTORE_COLLECTIONS, GCC_COUNTRIES, POS_SYSTEMS, RESTAURANT_SIZES } from "@/lib/constants";
import type { UserRole } from "@/types";

export const runtime = "nodejs";

const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_BODY_BYTES = 16 * 1024;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const roleValues = new Set<UserRole>(["restaurant_owner", "customer"]);
const countryValues = new Set<string>(GCC_COUNTRIES.map((country) => country.value));
const restaurantSizeValues = new Set<string>(RESTAURANT_SIZES.map((size) => size.value));
const posValues = new Set<string>(POS_SYSTEMS.map((pos) => pos.value));

type EarlyAccessRequest = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  restaurantName?: string;
  restaurantSize: string;
  currentPos?: string;
  role: UserRole;
  message?: string;
};

function text(value: unknown, field: string, maxLength = MAX_FIELD_LENGTH): string {
  if (typeof value !== "string") throw new Error(`Invalid ${field}`);
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > maxLength) throw new Error(`Invalid ${field}`);
  return trimmed;
}

function optionalText(value: unknown, field: string, maxLength = MAX_FIELD_LENGTH): string | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  return text(value, field, maxLength);
}

function parseRequest(value: unknown): EarlyAccessRequest {
  if (!value || typeof value !== "object") throw new Error("Invalid request");
  const body = value as Record<string, unknown>;
  const email = text(body.email, "email");

  if (!emailPattern.test(email.toLowerCase())) throw new Error("Invalid email");
  if (typeof body.role !== "string" || !roleValues.has(body.role as UserRole)) {
    throw new Error("Invalid role");
  }
  if (typeof body.country !== "string" || !countryValues.has(body.country)) {
    throw new Error("Invalid country");
  }
  if (typeof body.restaurantSize !== "string" || !restaurantSizeValues.has(body.restaurantSize)) {
    throw new Error("Invalid restaurant size");
  }
  if (body.currentPos !== undefined && (typeof body.currentPos !== "string" || !posValues.has(body.currentPos))) {
    throw new Error("Invalid POS system");
  }

  return {
    firstName: text(body.firstName, "first name"),
    lastName: text(body.lastName, "last name"),
    email,
    country: body.country,
    restaurantName: optionalText(body.restaurantName, "restaurant name"),
    restaurantSize: body.restaurantSize,
    currentPos: body.currentPos as string | undefined,
    role: body.role as UserRole,
    message: optionalText(body.message, "message", MAX_MESSAGE_LENGTH),
  };
}

function getEmailIdentity(email: string): string {
  const secret = process.env.EARLY_ACCESS_HMAC_SECRET;
  if (!secret) throw new Error("Early Access HMAC secret is not configured");

  return createHmac("sha256", secret).update(email.trim().toLowerCase()).digest("hex");
}

export async function POST(request: Request) {
  let data: EarlyAccessRequest;

  try {
    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > MAX_BODY_BYTES) throw new Error("Request too large");
    data = parseRequest(await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid Early Access submission" }, { status: 400 });
  }

  try {
    const documentId = getEmailIdentity(data.email);
    const reference = getAdminDb().collection(FIRESTORE_COLLECTIONS.earlyAccess).doc(documentId);
    const result = await getAdminDb().runTransaction(async (transaction) => {
      const snapshot = await transaction.get(reference);
      if (snapshot.exists) return "already_exists" as const;

      transaction.create(reference, {
        ...data,
        createdAt: new Date().toISOString(),
      });
      return "created" as const;
    });

    return NextResponse.json({ result }, { status: result === "created" ? 201 : 200 });
  } catch {
    return NextResponse.json(
      { error: "Early Access is temporarily unavailable" },
      { status: 503 }
    );
  }
}
