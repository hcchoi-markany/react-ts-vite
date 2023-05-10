import { ROUTES } from '@libs/router/data';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useIdToken } from 'react-firebase-hooks/auth';

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = getAuth();
  const [user, loading, error] = useIdToken(auth);
  console.log('AuthProvider', user, loading, error);

  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to={ROUTES.LOGIN.path} replace />;
  }
};

export default AuthProvider;
