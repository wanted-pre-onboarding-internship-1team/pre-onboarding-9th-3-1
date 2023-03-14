import { Data, DataValue } from './ResponseData';

export interface ChartData {
  timestamp: string;
  data: DataValue;
  idSet: Set<string>;
}

export enum ID {
  강남구 = '강남구',
  노원구 = '노원구',
  성북구 = '성북구',
  중랑구 = '중랑구',
}
