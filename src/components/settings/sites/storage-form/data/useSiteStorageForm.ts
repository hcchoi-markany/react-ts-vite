import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Storage, storageSchema } from '../../data';

import { ioTypeRadioOptions, serviceRegionSelectOptions } from './constants';
import { insertStorage } from '../../data/api';
const useSiteStorageForm = (siteId: number) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    reset,
  } = useForm<Storage>({
    defaultValues: {
      siteId,
      serviceRegion: serviceRegionSelectOptions[0].value,
      ioType: ioTypeRadioOptions[0].value,
    },
    resolver: yupResolver(storageSchema),
  });

  const onSubmit = (newStorage: Storage) => {
    console.log(newStorage);
    storageAddmutataion.mutate(newStorage);
  };

  const storageAddmutataion = useMutation({
    mutationFn: (newStorage: Storage) => insertStorage(newStorage),
    onSuccess: () => {
      reset();
    },
  });

  return { register, handleSubmit, errors, onSubmit, setValue, control, storageAddmutataion };
};

export default useSiteStorageForm;
