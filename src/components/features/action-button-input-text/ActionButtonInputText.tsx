import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputText from '@components/features/input-text';
import { IconButton, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { toast } from 'react-toastify';
import SubmitButtons from './submit-buttons';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SiteAddFormData } from '@components/settings/sites/site-add-modal/datas/siteAddModal.types';

export type ActionButtonInputTextProps = {
  value: string;
  isCopyEnable?: boolean;
  submitButton?: {
    isEditMode: boolean;
    onSubmit: (siteAddFormData: SiteAddFormData) => void;
    data: any;
  };
};

const copyTitleText = (copyTitleText: string) => {
  window.navigator.clipboard.writeText(copyTitleText);
  toast.success('copy success !');
};

export const siteNameSchema = object().shape({ siteName: string().required() });

const ActionButtonInputText = ({
  value,
  isCopyEnable,
  submitButton,
}: ActionButtonInputTextProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SiteAddFormData>({
    defaultValues: {
      siteName: value,
    },
    resolver: yupResolver(siteNameSchema),
  });

  const [isSubmitMode, setIsSubmitMode] = useState(false);

  const onSubmit = async (siteAddFormData: SiteAddFormData) => {
    console.log('ActionButtonInputText', siteAddFormData);
    await submitButton?.onSubmit({ ...submitButton.data, siteName: siteAddFormData.siteName });
    setIsSubmitMode(!isSubmitMode);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography component={'span'} pr={2}>
          {isSubmitMode && !!submitButton ? (
            <InputText
              register={register('siteName')}
              variant='standard'
              fullWidth={false}
              error={errors.siteName}
            />
          ) : (
            <>{value}</>
          )}
        </Typography>
        {isCopyEnable && !isSubmitMode && (
          <IconButton title='copy' onClick={() => copyTitleText(value)}>
            <ContentCopyIcon fontSize='small' />
          </IconButton>
        )}
        {submitButton && (
          <SubmitButtons isSubmitMode={isSubmitMode} setIsSubmitMode={setIsSubmitMode} />
        )}
      </form>
    </>
  );
};

export default ActionButtonInputText;
