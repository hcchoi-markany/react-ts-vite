import { useForm } from 'react-hook-form';
import { SiteAddFormData, SiteAddFormSchema } from './siteAddModal.types';
import { yupResolver } from '@hookform/resolvers/yup';

const useSiteAddModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SiteAddFormData>({
    resolver: yupResolver(SiteAddFormSchema),
  });

  const onSubmit = (data: SiteAddFormData) => {
    console.log('onSubmit', data);
  };
  return { register, handleSubmit, errors, onSubmit };
};

export default useSiteAddModal;
