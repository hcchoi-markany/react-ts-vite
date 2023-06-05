import { InputText } from '@components/features/input-text';
import { Button, Grid, Typography } from '@mui/material';
import {
  ioTypeRadioOptions,
  serviceRegionSelectOptions,
  SiteStorageFormProps,
  useSiteStorageForm,
} from './data';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { HookFormSelect } from '@components/features/select';
import { HookFormRadio } from '@components/features/radio';

const SiteStorageForm = ({ siteId, setIsShowStorageAddForm }: SiteStorageFormProps) => {
  const { register, handleSubmit, errors, onSubmit, setValue, control } =
    useSiteStorageForm(siteId);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container alignItems='center' spacing={2}>
        <Grid item xs={12} textAlign='right'>
          <Button size='small' color='info' type='submit'>
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

        <Grid item xs={2} pl={2}>
          ServiceRegion
        </Grid>
        <Grid item xs={4}>
          <HookFormSelect
            defaultValue={serviceRegionSelectOptions[0].value}
            register={register}
            setValue={setValue}
            options={serviceRegionSelectOptions}
            name={'serviceRegion'}
            size='small'
          />
        </Grid>

        <Grid item xs={2} pl={2}>
          AccessKey
        </Grid>
        <Grid item xs={4}>
          <InputText register={register('accessKey')} variant='outlined' size='small' />
        </Grid>

        <Grid item xs={2} pl={2}>
          I/OType
        </Grid>
        <Grid item xs={4}>
          <HookFormRadio
            control={control}
            // defaultValue={ioTypeRadioOptions[0].value}
            name={'ioType'}
            options={ioTypeRadioOptions}
          />

          {/* <InputText register={register('ioType')} variant='outlined' size='small' /> */}
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
