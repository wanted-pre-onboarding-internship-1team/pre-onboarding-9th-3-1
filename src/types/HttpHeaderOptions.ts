export default interface HttpHeaderOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
  headers?: {
    [key: string]: string;
  };
}
