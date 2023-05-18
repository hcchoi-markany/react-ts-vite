import QUERY_KEYS from '@libs/api/react-query/data/constants';
import { useQuery } from '@tanstack/react-query';

import { fetchSiteList } from './api';

const useSiteList = () => {
  const { data, isLoading, error } = useQuery([QUERY_KEYS.SITES_LIST], fetchSiteList);

  return { data, isLoading, error };
};

export default useSiteList;
