import { FieldError } from 'react-hook-form';

export type InputTextPrpos = {
  lable?: string;
  variant: 'outlined' | 'filled' | 'standard';
  register: any;
  fullWidth?: boolean;
  error?: FieldError;
  value?: string;
  defaultValue?: string;
};
