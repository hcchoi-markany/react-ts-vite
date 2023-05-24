import { Box } from '@mui/material';
import { Site } from '../data';
import { SiteItem } from '../site-item';
import useSiteList from './data/useSiteList';

const SiteList = () => {
  const { data: sites } = useSiteList();

  if (sites?.length === 0) {
    return <>데이터가 없습니다.</>;
  }

  return (
    <Box>
      {sites?.map((site: Site) => (
        <SiteItem key={site.id} site={site} />
      ))}
    </Box>
  );
};

export default SiteList;
