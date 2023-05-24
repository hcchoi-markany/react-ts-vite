import { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';

export type InputTextPrpos = {
  lable?: string;
  variant: 'outlined' | 'filled' | 'standard';
  register: any;
  fullWidth?: boolean;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  value?: string;
  defaultValue?: string;
  size?: 'small' | 'medium';
};
