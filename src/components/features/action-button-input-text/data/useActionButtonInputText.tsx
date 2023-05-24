import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ObjectSchema } from 'yup';

type SubmitButton<K> = {
  onSubmit: (formData: any) => void;
  schema: ObjectSchema<any>;
  data?: K;
};

const useActionButtonInputText = <T,>(value = '', name: string, submitButton?: SubmitButton<T>) => {
  const copyTitleText = (copyTitleText: string) => {
    window.navigator.clipboard.writeText(copyTitleText);
    toast.success('copy success !');
  };

  const defaultValues = { [name]: value };
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<any>({
    defaultValues,
    resolver: yupResolver(submitButton?.schema!),
  });

  const [isSubmitMode, setIsSubmitMode] = useState(false);

  const onSubmit = async () => {
    const newFormData = submitButton?.data
      ? { ...submitButton?.data, [name]: getValues(name) }
      : { [name]: getValues(name) };

    await submitButton?.onSubmit(newFormData);
    setIsSubmitMode(!isSubmitMode);
  };

  return { copyTitleText, register, handleSubmit, onSubmit, isSubmitMode, errors, setIsSubmitMode };
};

export default useActionButtonInputText;
