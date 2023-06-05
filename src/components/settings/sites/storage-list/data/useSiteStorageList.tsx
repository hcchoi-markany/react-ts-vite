import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import QUERY_KEYS from '@libs/api/react-query/data';
import { fetchStorageList } from '../../data/api';
import { Storage } from '../../data';

const useSiteStorageList = (siteId: number) => {
  const [isShowStorageAddForm, setIsShowStorageAddForm] = useState(false);

  const { data: storageList } = useQuery<Storage[]>({
    queryKey: [QUERY_KEYS.STORAGE_LIST, siteId],
    queryFn: () => fetchStorageList(siteId),
  });
  return { isShowStorageAddForm, setIsShowStorageAddForm, storageList };
};

export default useSiteStorageList;
2;
