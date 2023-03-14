import { ID } from './Data';

export interface DataResponse {
  response: { [key: string]: Data };
}

export interface Data extends DataValue {
  id: string;
}

export interface DataValue {
  value_area: number;
  value_bar: number;
}
