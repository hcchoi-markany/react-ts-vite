import { SiteAddFormData } from './../../site-add-modal/datas/siteAddModal.types';
import { apiGet, apiPost, apiPut } from '@libs/api/http/apiBase';
import { API_URLS } from '@libs/api/http/data/constants';

const fetchSiteList = () => apiGet({ url: API_URLS.SITES });

const insertSite = (siteAddFormData: SiteAddFormData) =>
  apiPost({ url: API_URLS.SITES, data: siteAddFormData });

const updateSite = (id: number, siteName: string) =>
  apiPut({ url: `${API_URLS.SITES}/${id}`, data: { siteName } });

export { fetchSiteList, insertSite, updateSite };
