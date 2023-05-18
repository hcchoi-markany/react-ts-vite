import SiteList from '@components/settings/sites/site-list/SiteList';
import TitleSection from '@components/settings/sites/title-section/TitleSection';
import { Container, Grid } from '@mui/material';

const SitesContainer = () => {
  return (
    <Container>
      <Grid container direction='column'>
        <Grid item>
          <TitleSection />
        </Grid>
        <Grid item>
          <SiteList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SitesContainer;
