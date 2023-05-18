import { Button, Grid, Typography } from '@mui/material';
import useSitesTitle from './data/useSitesTitle';
import SiteAddModal from '../site-add-modal/SiteAddModal';

const TitleSection = () => {
  const { open, setOpen, handleClose } = useSitesTitle();
  return (
    <>
      <Grid container justifyContent={'space-between'}>
        <Grid item>
          <Typography variant='h4' fontWeight={'550'}>
            My SIte List
          </Typography>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={() => setOpen(true)}>
            Add New Site
          </Button>
        </Grid>
      </Grid>
      <SiteAddModal open={open} handleClose={handleClose} />
    </>
  );
};

export default TitleSection;
