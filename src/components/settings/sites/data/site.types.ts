import { object, string, InferType, number } from 'yup';

export const siteSchema = object().shape({
  id: number().required(),
  siteName: string().required('SiteName is required.'),
  siteURL: string().url('Not URL Format.'),
  siteKey: string(),
  accessKey: string(),
  createdAt: number().required(),
});

export type Site = InferType<typeof siteSchema>;

export const storageSchema = object().shape({
  id: number(),
  siteId: number().required(),
  storageType: string().required(),
  storageName: string().required('storageType required'),
  bucketName: string().required(),
  filePath: string(),
  serviceRegion: string().oneOf(['ko', 'jp']).required(),
  accessKey: string().required(),
  ioType: string().required(),
  secretKey: string().required(),
  description: string(),
  createdAt: number().required(),
});

export type Storage = InferType<typeof storageSchema>;
