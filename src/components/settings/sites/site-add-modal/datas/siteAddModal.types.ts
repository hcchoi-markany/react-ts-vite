import { object, string, InferType, number } from 'yup';

export type SiteAddModalProps = {
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SiteAddFormSchema = object().shape({
  siteName: string().required('SiteName is required.'),
  siteURL: string().url('Not URL Format.'),
  id: number(),
});

export type SiteAddFormData = InferType<typeof SiteAddFormSchema>;
