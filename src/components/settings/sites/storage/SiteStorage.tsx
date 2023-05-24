import { ActionButtonInputText } from '@components/features/action-button-input-text';
import { Button, Grid } from '@mui/material';
import { SiteStorageProps } from './data';

const SiteStorage = ({ siteId }: SiteStorageProps) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justifyContent={'space-between'}>
          <Grid item>
            <ActionButtonInputText name='storageName' value='' isCopyEnable />
          </Grid>
          <Grid item>
            <Button variant='outlined' size='small'>
              delete
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Grid>
  );
};

export default SiteStorage;
