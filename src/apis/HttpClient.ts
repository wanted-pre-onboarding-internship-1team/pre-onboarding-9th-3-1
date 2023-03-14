import axios from 'axios';

interface AxiosResponse {
  id: string;
  value_area: number;
  value_bar: number;
}

interface SystemError {
  message: string;
}

export class HttpClient {
  BASE_URL: string;
  constructor() {
    this.BASE_URL = '/data/mock_data.json';
  }

  async getApi(): Promise<AxiosResponse | string> {
    try {
      return await axios.get(this.BASE_URL);
    } catch (error) {
      const err = error as SystemError;
      throw new Error(err.message);
    }
  }
}
