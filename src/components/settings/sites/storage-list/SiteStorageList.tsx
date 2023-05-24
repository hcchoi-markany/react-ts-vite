import { Button, Grid, Typography } from '@mui/material';
import { SiteStorageForm } from '../storage-form';
import { SiteStorageProps } from '../storage/data';
import { useSiteStorageList } from './data';

const SiteStorageList = ({ siteId }: SiteStorageProps) => {
  const { isShowStorageAddForm, setIsShowStorageAddForm } = useSiteStorageList();
  return (
    <Grid container pt={2}>
      <Grid item xs={12}>
        <Grid container justifyContent={'space-between'}>
          <Grid item>
            <Typography variant='h5'>My Storage List</Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setIsShowStorageAddForm(true)}
              variant='outlined'
              color='info'
              sx={{
                textTransform: 'none',
              }}
            >
              Add New Storage
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {isShowStorageAddForm && (
        <Grid item xs={12}>
          <SiteStorageForm siteId={siteId} setIsShowStorageAddForm={setIsShowStorageAddForm} />
        </Grid>
      )}
    </Grid>
  );
};

export default SiteStorageList;
