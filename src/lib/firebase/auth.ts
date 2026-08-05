import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  type User,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
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

export async function signInWithGoogle(): Promise<{ user: User; isNewUser: boolean }> {
  if (!isFirebaseConfigured()) {
    throw new Error("Firebase is not configured");
  }
  const provider = new GoogleAuthProvider();
  const credential = await signInWithPopup(getFirebaseAuth(), provider);
  const user = credential.user;

  // Check if this user already has a role/profile doc
  const userDocRef = doc(getFirebaseDb(), "users", user.uid);
  const userDocSnap = await getDoc(userDocRef);
  const isNewUser = !userDocSnap.exists();

  return { user, isNewUser };
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
