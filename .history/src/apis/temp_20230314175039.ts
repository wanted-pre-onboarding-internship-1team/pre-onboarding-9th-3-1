import axios, {
  Axios,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

interface APIResponse<T = any> {
  code: number;
  data: T;
  message: string;
}
export {};
interface CustomInstance extends Axios {
  get<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  delete<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  post<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  put<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  patch<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
}

const instance: CustomInstance = axios.create({
  baseURL: '/',
  withCredentials: true,
  headers: {},
});

instance.interceptors.request.use(req => {
  return req;
});
