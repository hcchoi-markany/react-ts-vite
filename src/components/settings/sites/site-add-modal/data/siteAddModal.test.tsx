import { useMutation } from '@tanstack/react-query';
import { Site } from '../../data';
import { updateSite } from '../../site-list/data/api';

const siteAddModalTest = () => {
  const siteUpdateMutation = useMutation({
    mutationFn: ({ id, site }: { id: number; site: Partial<Site> }) => updateSite(id, site),
  });

  const createDummySiteData = (site: Site) => {
    return {
      ...site,
      accessKey: self.crypto.randomUUID(),
      siteKey: self.crypto.randomUUID(),
      createdAt: new Date().getTime(),
    };
  };

  const updateDummySiteData = async (site: Site) => {
    await siteUpdateMutation.mutateAsync({ id: site.id, site: createDummySiteData(site) });
  };

  return { updateDummySiteData };
};

export default siteAddModalTest;
