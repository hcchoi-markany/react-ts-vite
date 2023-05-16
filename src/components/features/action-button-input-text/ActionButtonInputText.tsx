import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputText from '@components/features/input-text';
import { IconButton, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';

export type ActionButtonInputTextProps = {
  value: string;
  isCopyEnable?: boolean;
  editButton?: {
    isEditMode: boolean;
    url: string;
    onSubmit: () => {};
  };
};

const copyTitleText = (copyTitleText: string) => {
  window.navigator.clipboard.writeText(copyTitleText);
  toast.success('copy success !');
};

const ActionButtonInputText = ({ value, isCopyEnable, editButton }: ActionButtonInputTextProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isEditMode, setIsEditMode] = useState(editButton?.isEditMode || false);
  return (
    <>
      <Typography component={'span'} pr={2}>
        {isEditMode ? (
          <InputText register={register} variant='standard' fullWidth={false} value={value} />
        ) : (
          <>{value}</>
        )}
      </Typography>
      {isCopyEnable && (
        <IconButton title='copy' onClick={() => copyTitleText(value)}>
          <ContentCopyIcon fontSize='small' />
        </IconButton>
      )}
      {editButton && (
        <IconButton title='edit' onClick={() => setIsEditMode(!isEditMode)}>
          <EditIcon fontSize='small' />
        </IconButton>
      )}
    </>
  );
};

export default ActionButtonInputText;
