import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Site } from '@components/settings/sites/data';
import { deleteSite, updateSite } from '../../site-list/data/api';
import QUERY_KEYS from '@libs/api/react-query/data/constants';
import { format } from 'date-fns';

const useSiteItem = (site: Site) => {
  const createdAtDate = format(new Date(site.createdAt), 'yyyy-MM-dd HH:mm:ss');

  const queryClinet = useQueryClient();
  const siteUpdateMutation = useMutation({
    mutationFn: (_site: Site) => updateSite(site.id, _site),
    onSuccess: () => queryClinet.invalidateQueries([QUERY_KEYS.SITES_LIST]),
  });

  const siteDeleteMutation = useMutation({
    mutationFn: (id: number) => deleteSite(id),
    onSuccess: () => queryClinet.invalidateQueries([QUERY_KEYS.SITES_LIST]),
  });

  const onSubmit = (_site: Site) => {
    siteUpdateMutation.mutateAsync(_site);
  };

  const handleDeleteSite = (id: number) => {
    siteDeleteMutation.mutateAsync(id);
  };

  return {
    onSubmit,
    handleDeleteSite,
    createdAtDate,
  };
};

export default useSiteItem;
