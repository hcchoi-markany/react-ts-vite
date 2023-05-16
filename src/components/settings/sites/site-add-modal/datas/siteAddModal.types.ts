import { object, string, InferType } from 'yup';

export type SiteAddModalProps = {
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SiteAddFormSchema = object().shape({
  siteName: string().required('SiteName is required.'),
  siteURL: string().url('Not URL Format.'),
});

export type SiteAddFormData = InferType<typeof SiteAddFormSchema>;
