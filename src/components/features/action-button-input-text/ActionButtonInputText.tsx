import { IconButton, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SubmitButtons from './submit-buttons';
import useActionButtonInputText from './data/useActionButtonInputText';
import { InputText } from '../input-text';
import { ActionButtonInputTextProps } from './data';

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
          {isSubmitMode && !(submitButton == null) ? (
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
          <IconButton
            title='copy'
            onClick={() => {
              copyTitleText(value);
            }}
          >
            <ContentCopyIcon fontSize='small' />
          </IconButton>
        )}
        {submitButton != null && (
          <SubmitButtons isSubmitMode={isSubmitMode} setIsSubmitMode={setIsSubmitMode} />
        )}
      </form>
    </>
  );
};

export default ActionButtonInputText;
