import { API, ChartMap } from './API';
import { ChartData } from './ChartData';

export default interface Repository {
  readonly api: API;
  getChartData(timeStamp: string): ChartData;
  getKeys(): string[];
}
