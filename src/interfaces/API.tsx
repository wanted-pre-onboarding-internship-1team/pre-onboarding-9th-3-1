import { ChartData } from './ChartData';

export type DataResponse = Record<string, ChartData>;

export interface ApiResponse {
  type: string;
  version: number;
  response: DataResponse;
}

export interface API {
  fetchData(): Promise<ApiResponse>;
}
