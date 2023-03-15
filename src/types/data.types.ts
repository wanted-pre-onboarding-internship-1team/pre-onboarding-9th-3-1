export interface Data {
  [key: string]: DataItem;
}

export interface DataItem {
  id: string;
  value_area: number;
  value_bar: number;
}
