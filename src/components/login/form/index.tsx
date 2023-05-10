import useGoogleAuth from '@libs/firebase/auth/data';
import { ROUTES } from '@libs/router/data';
import { Button, Grid, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const LoginFrom = () => {
  const navigate = useNavigate();
  const { signIn } = useGoogleAuth();

  const login = async () => {
    const userInfo = await signIn();
    console.log(userInfo);

    if (userInfo) navigate(ROUTES.INDEX.path);
  };

  return (
    <Grid container direction='column' justifyContent={'center'} alignItems={'center'}>
      <Grid item>
        <Typography variant='h6'>Login</Typography>
      </Grid>
      <Grid item>
        <Button variant='outlined' onClick={() => login()}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginFrom;
