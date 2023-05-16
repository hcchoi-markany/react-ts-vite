import ActionButtonInputText from '@components/features/action-button-input-text';
import { Grid } from '@mui/material';

const SiteList = () => {
  return (
    <Grid container>
      <Grid item>
        <ActionButtonInputText
          value='Site1'
          isCopyEnable
          editButton={{ isEditMode: false, url: '', onSubmit: () => {} }}
        />
      </Grid>
    </Grid>
  );
};

export default SiteList;
