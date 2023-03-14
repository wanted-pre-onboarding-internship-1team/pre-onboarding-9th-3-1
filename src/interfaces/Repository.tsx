import { API, ChartMap } from './API';
import { ChartData } from './ChartData';

export default interface Repository {
  readonly api: API;
  readonly datas: ChartMap;

  init(): void;
  isEmpty(): boolean;
  getChartData(timeStamp: string): ChartData;
}
