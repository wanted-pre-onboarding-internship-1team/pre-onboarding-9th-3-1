import HttpClient from '@/utils/httpClient';
import Response from '@/types/Response';
import Data from '@/types/Data';

export default class DataService {
  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  fetchData(): Promise<Response<Data>> {
    return this.httpClient.fetch('').then(response => response.json());
  }
}
