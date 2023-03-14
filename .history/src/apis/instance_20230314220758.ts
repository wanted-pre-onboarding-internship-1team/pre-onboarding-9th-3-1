import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface CustomInstance extends AxiosInstance {
  get<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
}

const instance: CustomInstance = axios.create({
  baseURL: '/',
  withCredentials: true,
  headers: {},
});

export { instance };
