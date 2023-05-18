import axiosInstance from './axios';
import { AxiosResponse } from 'axios';

type Params<T = any> = {
  url: string;
  data?: T;
  headers?: Record<string, string>;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text' | 'stream';
};

const parseResponseData = (response: AxiosResponse<any, any>) => {
  if (response.data) {
    return response.data;
  } else {
    return response;
  }
};

const apiGet = async ({ url, headers, responseType }: Omit<Params, 'data'>): Promise<any> => {
  const response = await axiosInstance.get(url, { headers, responseType });
  return parseResponseData(response);
};

const apiPost = async ({ url, data, headers }: Omit<Params, 'responseType'>): Promise<any> => {
  const response = await axiosInstance.post(url, data, { headers });
  return parseResponseData(response);
};

const apiPut = async ({ url, data, headers }: Omit<Params, 'responseType'>): Promise<any> => {
  const response = await axiosInstance.put(url, data, { headers });
  return parseResponseData(response);
};

const apiDelete = async ({ url, headers, responseType }: Omit<Params, 'data'>): Promise<any> => {
  const response = await axiosInstance.delete(url, { headers, responseType });
  return parseResponseData(response);
};

export { apiGet, apiPost, apiPut, apiDelete };
