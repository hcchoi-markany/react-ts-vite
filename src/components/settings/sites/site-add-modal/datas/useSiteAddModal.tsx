import { useForm } from 'react-hook-form';
import { SiteAddFormData, SiteAddFormSchema } from './siteAddModal.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import QUERY_KEYS from '@libs/api/react-query/data/constants';
import { insertSite } from '../../site-list/data/api';

const useSiteAddModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SiteAddFormData>({
    resolver: yupResolver(SiteAddFormSchema),
  });

  const queryClient = useQueryClient();

  const siteAddMutation = useMutation({
    mutationFn: (siteAddFormData: SiteAddFormData) => insertSite(siteAddFormData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SITES_LIST],
      });
      reset();
    },
  });

  const onSubmit = (siteAddFormData: SiteAddFormData) => {
    console.log('onSubmit', siteAddFormData);
    siteAddMutation.mutate(siteAddFormData);
  };
  return { register, handleSubmit, errors, onSubmit };
};

export default useSiteAddModal;
