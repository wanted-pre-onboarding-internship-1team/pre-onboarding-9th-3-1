import { ChartData } from './ChartData';

export type ChartMap = Record<string, ChartData>;

export interface ApiResponse {
  type: string;
  version: number;
  response: ChartMap;
}

export interface API {
  fetchData(): Promise<ApiResponse>;
}
