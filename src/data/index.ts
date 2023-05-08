import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const useGoogleAuth = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCsfVkzFOQGyR8OSjqovHy2J3eInFLnvzE',
    authDomain: 'saforus-5ba09.firebaseapp.com',
    projectId: 'saforus-5ba09',
    storageBucket: 'saforus-5ba09.appspot.com',
    messagingSenderId: '553892820160',
    appId: '1:553892820160:web:cc0f8e17e672b3f8d6a925',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  async function signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(getAuth(), provider);
    console.log(res);
  }

  return {
    signIn,
  };
};

export default useGoogleAuth;
