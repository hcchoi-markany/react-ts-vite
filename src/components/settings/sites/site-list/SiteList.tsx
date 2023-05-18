import ActionButtonInputText from '@components/features/action-button-input-text/ActionButtonInputText';
import QUERY_KEYS from '@libs/api/react-query/data/constants';
import { Grid } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SiteAddFormData } from '../site-add-modal/datas/siteAddModal.types';
import { updateSite } from './data/api';
import useSiteList from './data/useSiteList';

const SiteList = () => {
  const { data: sites } = useSiteList();
  const queryClinet = useQueryClient();
  const siteUpdateMutation = useMutation({
    mutationFn: ({ id, siteName }: SiteAddFormData) => updateSite(id!, siteName),
    onSuccess: () => queryClinet.invalidateQueries([QUERY_KEYS.SITES_LIST]),
  });

  const onSubmit = (siteAddFormData: SiteAddFormData) => {
    console.log('siteName', siteAddFormData);
    siteUpdateMutation.mutateAsync(siteAddFormData);
  };

  if (sites?.length === 0) {
    return <>데이터가 없습니다.</>;
  }

  return (
    <Grid container>
      <Grid item>
        {sites?.map((site: SiteAddFormData) => (
          <ActionButtonInputText
            key={site.id}
            value={site.siteName}
            isCopyEnable
            submitButton={{
              isEditMode: false,
              onSubmit,
              data: site,
            }}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default SiteList;
