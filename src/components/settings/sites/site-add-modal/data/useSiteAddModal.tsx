import { useForm } from 'react-hook-form';
import { SiteAddForm, SiteAddFormSchema } from './siteAddModal.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import QUERY_KEYS from '@libs/api/react-query/data/constants';
import { insertSite } from '../../site-list/data/api';
import siteAddModalTest from './siteAddModal.test';

const useSiteAddModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SiteAddForm>({
    resolver: yupResolver(SiteAddFormSchema),
  });

  const queryClient = useQueryClient();
  //@TEST_CODE
  const { updateDummySiteData } = siteAddModalTest();

  const siteAddMutation = useMutation({
    mutationFn: (newSite: SiteAddForm) => insertSite(newSite),
    onSuccess: async (data) => {
      //@TEST_CODE
      await updateDummySiteData(data);
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SITES_LIST],
      });
      reset();
    },
  });

  const onSubmit = (newSite: SiteAddForm) => {
    siteAddMutation.mutate(newSite);
  };
  return { register, handleSubmit, errors, onSubmit };
};

export default useSiteAddModal;
