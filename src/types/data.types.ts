export interface DataResponse {
  type: string;
  version: number;
  response: Data[];
}

export interface Data {
  id: string;
  value_area: number;
  value_bar: number;
}
