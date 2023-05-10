import { FirebaseApp, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: 'saforus-5ba09.firebaseapp.com',
  projectId: 'saforus-5ba09',
  storageBucket: 'saforus-5ba09.appspot.com',
  messagingSenderId: '553892820160',
  appId: '1:553892820160:web:cc0f8e17e672b3f8d6a925',
};

// Initialize Firebase
let firebaseApp: FirebaseApp;

const getFirebaseApp = () => {
  if (!firebaseApp) firebaseApp = initializeApp(firebaseConfig);
  return firebaseApp;
};

export default getFirebaseApp;
