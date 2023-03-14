import { API, ApiResponse } from '../interfaces/API';

export class MockAPI implements API {
  async fetchData(): Promise<ApiResponse> {
    const response = await fetch('/data/mock_data.json');
    const data = await response.json();
    return data;
  }
}
