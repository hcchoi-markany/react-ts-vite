import { Container, Grid, styled } from '@mui/material';
import Header from '../header/indes';
import { DefaultLayoutProps } from './data';

const DefaultLayoutStyle = styled(Container)({
  paddingRight: '0 !important',
  paddingLeft: '0 !important',
});

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <DefaultLayoutStyle maxWidth='xl'>
      <Grid container direction='column'>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </DefaultLayoutStyle>
  );
};

export default DefaultLayout;
