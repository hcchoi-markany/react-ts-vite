import { UseFormSetValue, UseFormRegister } from 'react-hook-form';

export type SelectOption = {
  label: string;
  value: any;
};

export type HookFormSelectProps = {
  defaultValue?: any;
  size?: 'small' | 'medium';
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  options: SelectOption[];
  name: string;
};
