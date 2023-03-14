import { ID } from './Data';

export interface DataResponse {
  response: { [key: string]: Data };
}

export interface Data {
  id: ID;
  value_area: number;
  value_bar: number;
}
