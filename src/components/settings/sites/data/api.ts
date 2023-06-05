import { SiteAddForm } from '../site-add-modal/data/siteAddModal.types';
import { Site, Storage } from '@components/settings/sites/data';
import { apiDelete, apiGet, apiPost, apiPut } from '@libs/api/http/apiBase';
import { API_URLS } from '@libs/api/http/data/constants';

const fetchSiteList = () => apiGet({ url: API_URLS.SITES });

const insertSite = (newSite: SiteAddForm) => apiPost({ url: API_URLS.SITES, data: newSite });

const updateSite = (id: number, site: Partial<Site>) =>
  apiPut({ url: `${API_URLS.SITES}/${id}`, data: { ...site } });

const deleteSite = (id: number) => apiDelete({ url: `${API_URLS.SITES}/${id}` });

const fetchStorageList = (siteId: number) =>
  apiGet({ url: `${API_URLS.STORAGES}?siteId=${siteId}` });

const insertStorage = (newStorage: Storage) =>
  apiPost({ url: API_URLS.STORAGES, data: newStorage });

export { fetchSiteList, insertSite, updateSite, deleteSite, fetchStorageList, insertStorage };
