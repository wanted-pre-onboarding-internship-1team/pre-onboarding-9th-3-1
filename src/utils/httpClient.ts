import HttpHeaderOptions from '@/types/HttpHeaderOptions';
export default class HttpClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  fetch(url: string, options?: HttpHeaderOptions): Promise<Response> {
    return fetch(this.baseUrl + url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });
  }
}
