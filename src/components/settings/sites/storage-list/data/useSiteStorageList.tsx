import { useState } from 'react';

const useSiteStorageList = () => {
  const [isShowStorageAddForm, setIsShowStorageAddForm] = useState(false);
  return { isShowStorageAddForm, setIsShowStorageAddForm };
};

export default useSiteStorageList;
