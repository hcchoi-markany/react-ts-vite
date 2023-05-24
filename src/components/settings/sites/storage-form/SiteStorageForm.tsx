import { InputText } from '@components/features/input-text';
import { Button, Grid, Typography } from '@mui/material';
import { SiteStorageFormProps, useSiteStorageForm } from './data';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const SiteStorageForm = ({ siteId, setIsShowStorageAddForm }: SiteStorageFormProps) => {
  const { register, handleSubmit, errors, onSubmit } = useSiteStorageForm(siteId);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container alignItems='center' spacing={2}>
        <Grid item xs={12} textAlign='right'>
          <Button size='small' color='info'>
            <SaveAsOutlinedIcon sx={{ width: '20px' }} />
            <Typography pl={0.5} variant={'body2'}>
              Save
            </Typography>
          </Button>

          <Button
            size='small'
            color='info'
            onClick={() => {
              setIsShowStorageAddForm(false);
            }}
          >
            <CloseOutlinedIcon sx={{ width: '20px' }} />
            <Typography pl={0.5} variant={'body2'}>
              Cancel
            </Typography>
          </Button>
        </Grid>

        <Grid item xs={2} pl={2}>
          StorageName
        </Grid>
        <Grid item xs={4}>
          <InputText
            register={register('storageName')}
            variant='outlined'
            size='small'
            error={errors.storageName}
          />
        </Grid>

        <Grid item xs={2} pl={2}>
          BucketName
        </Grid>
        <Grid item xs={4}>
          <InputText
            register={register('bucketName')}
            variant='outlined'
            size='small'
            error={errors.bucketName}
          />
        </Grid>

        <Grid item xs={2} pl={2}>
          StorageType
        </Grid>
        <Grid item xs={4}>
          <InputText
            register={register('storageType')}
            variant='outlined'
            size='small'
            error={errors.storageType}
          />
        </Grid>

        <Grid item xs={2} pl={2}>
          FilePath
        </Grid>
        <Grid item xs={4}>
          <InputText
            register={register('filePath')}
            variant='outlined'
            size='small'
            error={errors.filePath}
          />
        </Grid>

        {/* FIXME:change select */}
        <Grid item xs={2} pl={2}>
          ServiceRegion
        </Grid>
        <Grid item xs={4}>
          <InputText register={register('serviceRegion')} variant='outlined' size='small' />
        </Grid>

        <Grid item xs={2} pl={2}>
          AccessKey
        </Grid>
        <Grid item xs={4}>
          <InputText register={register('accessKey')} variant='outlined' size='small' />
        </Grid>

        {/* FIXME:change radio */}
        <Grid item xs={2} pl={2}>
          I/OType
        </Grid>
        <Grid item xs={4}>
          <InputText register={register('ioType')} variant='outlined' size='small' />
        </Grid>

        <Grid item xs={2} pl={2}>
          SecretKey
        </Grid>
        <Grid item xs={4}>
          <InputText register={register('secretKey')} variant='outlined' size='small' />
        </Grid>

        <Grid item xs={2} pl={2}>
          Description
        </Grid>
        <Grid item xs={4}>
          <InputText register={register('description')} variant='outlined' size='small' />
        </Grid>
      </Grid>
    </form>
  );
};

export default SiteStorageForm;
