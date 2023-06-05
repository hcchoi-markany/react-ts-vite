import { array, date, InferType, number, object, string } from 'yup';

export type SiteStorageProps = {
  siteId: number;
};

export const SiteStorageSchema = array(
  object().shape({
    id: number(),
    siteId: number().required(),
    storageType: string().required(),
    storageName: string().required(),
    bucketName: string().oneOf(['aws', 'google', 'ms']).required(),
    filePath: string(),
    serviceRegion: string().required(),
    accessKey: string().required(),
    IoType: number().required(),
    secretKey: string().required(),
    description: string(),
    createdAt: date().required(),
  }),
);

export type SiteStorage = InferType<typeof SiteStorageSchema>;
