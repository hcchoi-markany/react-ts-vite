import getFirebaseApp from '@libs/firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const useGoogleAuth = () => {
  async function signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    const provider = new GoogleAuthProvider();
    const firebaseApp = getFirebaseApp();
    const { user } = await signInWithPopup(getAuth(firebaseApp), provider);
    return user;
  }

  return {
    signIn,
  };
};

export default useGoogleAuth;
