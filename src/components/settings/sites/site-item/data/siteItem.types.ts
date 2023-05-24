import { object, string } from 'yup';
import { Site } from '@components/settings/sites/data';

export const siteNameSchema = object().shape({ siteName: string().required() });
export const siteURLSchema = object().shape({ siteURL: string().url().required() });

export type SiteItemProps = {
  site: Site;
};
