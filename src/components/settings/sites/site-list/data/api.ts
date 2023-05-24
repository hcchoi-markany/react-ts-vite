import { apiDelete, apiGet, apiPost, apiPut } from '@libs/api/http/apiBase';
import { API_URLS } from '@libs/api/http/data/constants';
import { Site } from '../../data';
import { SiteAddForm } from '../../site-add-modal/data';

const fetchSiteList = () => apiGet({ url: API_URLS.SITES });

const insertSite = (newSite: SiteAddForm) => apiPost({ url: API_URLS.SITES, data: newSite });

const updateSite = (id: number, site: Partial<Site>) =>
  apiPut({ url: `${API_URLS.SITES}/${id}`, data: { ...site } });

const deleteSite = (id: number) => apiDelete({ url: `${API_URLS.SITES}/${id}` });

export { fetchSiteList, insertSite, updateSite, deleteSite };
