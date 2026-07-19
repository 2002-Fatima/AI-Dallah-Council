import { addDoc, collection } from "firebase/firestore";
import { getFirebaseDb, isFirebaseConfigured } from "./config";
import { FIRESTORE_COLLECTIONS } from "@/lib/constants";
import type {
  ContactSalesSubmission,
  EarlyAccessSubmission,
  EmailSubscription,
} from "@/types";

async function addDocument<T extends Record<string, unknown>>(
  collectionName: string,
  data: T
): Promise<void> {
  if (!isFirebaseConfigured()) {
    throw new Error("Firebase is not configured");
  }
  await addDoc(collection(getFirebaseDb(), collectionName), data);
}

export async function submitEarlyAccess(
  data: Omit<EarlyAccessSubmission, "createdAt">
): Promise<void> {
  await addDocument(FIRESTORE_COLLECTIONS.earlyAccess, {
    ...data,
    createdAt: new Date().toISOString(),
  });
}

export async function submitContactSales(
  data: Omit<ContactSalesSubmission, "createdAt">
): Promise<void> {
  await addDocument(FIRESTORE_COLLECTIONS.contactSales, {
    ...data,
    createdAt: new Date().toISOString(),
  });
}

export async function subscribeEmail(
  data: Omit<EmailSubscription, "createdAt">
): Promise<void> {
  await addDocument(FIRESTORE_COLLECTIONS.emailSubscriptions, {
    ...data,
    createdAt: new Date().toISOString(),
  });
}
