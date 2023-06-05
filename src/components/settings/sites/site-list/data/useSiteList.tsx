import QUERY_KEYS from '@libs/api/react-query/data/constants';
import { useQuery } from '@tanstack/react-query';

import { fetchSiteList } from '../../data/api';

const useSiteList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.SITES_LIST],
    queryFn: fetchSiteList,
  });

  return { data, isLoading, error };
};

export default useSiteList;
