import { IconButton, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SubmitButtons from './submit-buttons';
import { ActionButtonInputTextProps } from './data';
import useActionButtonInputText from './data/useActionButtonInputText';
import { InputText } from '../input-text';

const ActionButtonInputText = <T,>({
  value = '',
  name,
  isCopyEnable,
  submitButton,
  variant = 'standard',
}: ActionButtonInputTextProps<T>) => {
  const { copyTitleText, register, handleSubmit, onSubmit, isSubmitMode, errors, setIsSubmitMode } =
    useActionButtonInputText(value, name, submitButton);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography component={'span'} pr={2}>
          {isSubmitMode && !!submitButton ? (
            <InputText
              register={register(name)}
              variant={variant}
              fullWidth={false}
              error={errors[name]}
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
