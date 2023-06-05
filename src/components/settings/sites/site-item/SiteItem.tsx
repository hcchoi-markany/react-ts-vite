import { Grid, Button } from '@mui/material';
import { ActionButtonInputText } from '@components/features/action-button-input-text';
import { SiteItemProps, siteNameSchema, siteURLSchema, useSiteItem } from './data';
import { SiteStorageList } from '../storage-list';

const SiteItem = ({ site }: SiteItemProps) => {
  const { onSubmit, handleDeleteSite, createdAtDate } = useSiteItem(site);

  return (
    <Grid
      container
      sx={{
        background: '#f1f1f1',
      }}
      p={3}
      m={1}
    >
      <Grid item xs={12}>
        <Grid container justifyContent={'space-between'} alignItems='center'>
          <Grid>
            <ActionButtonInputText
              key={site.id}
              value={site.siteName}
              name='siteName'
              isCopyEnable
              submitButton={{
                onSubmit,
                data: site,
                schema: siteNameSchema,
              }}
            />
          </Grid>
          <Grid item>
            <Button variant='outlined' size='small' onClick={() => handleDeleteSite(site.id)}>
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        Created {createdAtDate}
      </Grid>
      <Grid item xs={12}>
        <Grid container alignItems='center'>
          <Grid item xs={2}>
            SiteURL
          </Grid>
          <Grid item xs={4}>
            <ActionButtonInputText
              value={site.siteURL}
              name='siteURL'
              isCopyEnable
              submitButton={{
                onSubmit,
                data: site,
                schema: siteURLSchema,
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems='center'>
          <Grid item xs={2}>
            SiteKey
          </Grid>
          <Grid item xs={4}>
            <ActionButtonInputText value={site.siteKey} name='siteKey' isCopyEnable />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems='center'>
          <Grid item xs={2}>
            AccessKey
          </Grid>
          <Grid item xs={4}>
            <ActionButtonInputText value={site.accessKey} name='accessKey' isCopyEnable />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <SiteStorageList siteId={site.id} />
      </Grid>
    </Grid>
  );
};

export default SiteItem;
