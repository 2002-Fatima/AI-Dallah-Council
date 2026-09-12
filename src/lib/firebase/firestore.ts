import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { getFirebaseDb, isFirebaseConfigured } from "./config";
import { FIRESTORE_COLLECTIONS } from "@/lib/constants";
import type { EmailSubscription, UserProfile } from "@/types";

async function addDocument<T extends Record<string, unknown>>(
  collectionName: string,
  data: T
): Promise<void> {
  if (!isFirebaseConfigured()) {
    throw new Error("Firebase is not configured");
  }
  await addDoc(collection(getFirebaseDb(), collectionName), data);
}

export async function subscribeEmail(
  data: Omit<EmailSubscription, "createdAt">
): Promise<void> {
  await addDocument(FIRESTORE_COLLECTIONS.emailSubscriptions, {
    ...data,
    createdAt: new Date().toISOString(),
  });
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  if (!isFirebaseConfigured()) {
    throw new Error("Firebase is not configured");
  }

  const snapshot = await getDoc(doc(getFirebaseDb(), FIRESTORE_COLLECTIONS.users, uid));
  return snapshot.exists() ? (snapshot.data() as UserProfile) : null;
}
