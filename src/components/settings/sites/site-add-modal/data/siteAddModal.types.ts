import { object, string, number } from 'yup';
import { Site } from '../../data';

export type SiteAddModalProps = {
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SiteAddForm = Pick<Site, 'siteName' | 'siteURL' | 'id'>;

export const SiteAddFormSchema = object<SiteAddForm>().shape({
  siteName: string().required('SiteName is required.'),
  siteURL: string().url('Not URL Format.'),
  id: number(),
});
