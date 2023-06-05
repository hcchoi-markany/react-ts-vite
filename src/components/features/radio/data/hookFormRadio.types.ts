import { Control } from 'react-hook-form';

export type RadioOption = {
  label: string;
  value: any;
};
export type HookFormRadioProps = {
  control: Control<any, any>;
  defaultValue?: string;
  name: string;
  options: RadioOption[];
};
