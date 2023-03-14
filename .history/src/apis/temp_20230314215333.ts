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
interface CustomInstance extends AxiosInstance {
  get<T = unknown, R = AxiosResponse<APIResponse<T>>, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
}

const instance: CustomInstance = axios.create({
  baseURL: '/',
  withCredentials: true,
  headers: {},
});

export instance;