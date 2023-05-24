import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { storageSchema, Storage } from '../../data';
const useSiteStorageForm = (siteId: number) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Storage>({
    defaultValues: {
      siteId,
    },
    resolver: yupResolver(storageSchema),
  });

  const onSubmit = (newStorage: Storage) => {
    console.log(newStorage);
  };
  return { register, handleSubmit, errors, onSubmit };
};

export default useSiteStorageForm;
