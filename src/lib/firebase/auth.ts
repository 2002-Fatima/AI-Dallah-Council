import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  type User,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getFirebaseAuth, getFirebaseDb, isFirebaseConfigured } from "./config";
import type { UserRole } from "@/types";

export async function signUp(email: string, password: string): Promise<User> {
  if (!isFirebaseConfigured()) {
    throw new Error("Firebase is not configured");
  }
  const credential = await createUserWithEmailAndPassword(
    getFirebaseAuth(),
    email,
    password
  );
  return credential.user;
}

export async function signIn(email: string, password: string): Promise<User> {
  if (!isFirebaseConfigured()) {
    throw new Error("Firebase is not configured");
  }
  const credential = await signInWithEmailAndPassword(
    getFirebaseAuth(),
    email,
    password
  );
  return credential.user;
}

export async function signOut(): Promise<void> {
  if (!isFirebaseConfigured()) return;
  await firebaseSignOut(getFirebaseAuth());
}

export async function saveUserRole(
  uid: string,
  email: string,
  role: UserRole
): Promise<void> {
  if (!isFirebaseConfigured()) {
    throw new Error("Firebase is not configured");
  }
  const now = new Date().toISOString();
  await setDoc(doc(getFirebaseDb(), "users", uid), {
    uid,
    email,
    role,
    createdAt: now,
    updatedAt: now,
  });
}
