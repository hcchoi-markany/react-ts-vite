import { ObjectSchema } from 'yup';

export type ActionButtonInputTextProps<T> = {
  value?: string;
  name: string;
  isCopyEnable?: boolean;
  submitButton?: {
    onSubmit: (formData: T) => void;
    schema: ObjectSchema<any>;
    data?: T;
  };
  variant?: 'standard' | 'outlined';
};
