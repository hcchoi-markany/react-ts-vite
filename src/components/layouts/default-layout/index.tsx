import { Outlet } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import Header from '../header/indes';

const DefaultLayout = () => {
  return (
    <Container maxWidth={false} sx={{ padding: 0 }}>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DefaultLayout;
