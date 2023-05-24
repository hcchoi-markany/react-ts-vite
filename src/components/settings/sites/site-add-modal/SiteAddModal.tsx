import { Box, Modal, Grid, styled, Typography, Button } from '@mui/material';

import InputText from '@components/features/input-text/InputText';
import { SiteAddModalProps, useSiteAddModal } from './data';

const ModalBody = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  background: 'white',

  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  borderRadius: '4px',
  boxShadow:
    '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
  padding: '32px',
});

const SiteAddModal = ({ open, handleClose }: SiteAddModalProps) => {
  const { register, handleSubmit, errors, onSubmit } = useSiteAddModal();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction='column' rowSpacing={2}>
            <Grid item>LOGO</Grid>

            <Grid item>
              <Typography variant='h6'>Add My Site</Typography>
              <Typography variant='body2' color='#5f5f5f'>
                Please register your site to use SaForus service.
              </Typography>
            </Grid>

            <Grid item>
              <InputText
                lable='Site Name*'
                variant='outlined'
                register={register('siteName')}
                error={errors.siteName}
              />
            </Grid>

            <Grid item>
              <InputText
                lable='Site URL'
                variant='outlined'
                register={register('siteURL')}
                error={errors.siteURL}
              />
            </Grid>

            <Grid item>
              <Grid container spacing={4} pt={2}>
                <Grid item xs={6}>
                  <Button
                    variant='outlined'
                    color='inherit'
                    fullWidth
                    onClick={() => handleClose(true)}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant='outlined' color='primary' fullWidth type='submit'>
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default SiteAddModal;
