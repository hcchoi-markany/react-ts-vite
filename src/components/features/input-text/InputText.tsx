import { TextField } from '@mui/material';
import { InputTextPrpos } from './data/inputText.types';

const InputText = ({
  lable,
  variant,
  register,
  fullWidth = true,
  error,
  value,
  defaultValue,
}: InputTextPrpos) => {
  return (
    <TextField
      label={lable}
      variant={variant}
      {...register}
      fullWidth={fullWidth}
      error={!!error}
      helperText={error?.message}
      value={value}
      defaultValue={defaultValue}
    />
  );
};

export default InputText;
