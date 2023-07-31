import { Auth, signInWithCustomToken } from '@firebase/auth';
import { firebaseAuth } from '../firebase/init';

export async function firebaseSignInWithCustomToken(customToken?: string) {
  if (!customToken) {
    throw new Error('Missing sign-in token');
  }
  await signInWithCustomToken(firebaseAuth, customToken);
}

export async function getFirebaseToken() {
  return firebaseAuth.currentUser?.getIdToken();
}

export async function firebaseTokenExists() {
  const token = await getFirebaseToken();
  return !!token;
}

export function firebaseAuthChange(
  ...params: Parameters<Auth['onAuthStateChanged']>
) {
  firebaseAuth.onAuthStateChanged(...params);
}
