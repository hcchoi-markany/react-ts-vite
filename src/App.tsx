import { useState } from 'react';

import './App.css';
import { Button } from '@mui/material';
import useGoogleAuth from './data';
import { getAuth } from 'firebase/auth';

function App() {
  const { signIn } = useGoogleAuth();
  const { currentUser } = getAuth();
  console.log(currentUser);

  return (
    <>
      <div>
        <Button variant='outlined' onClick={() => signIn()}>
          Login
        </Button>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
