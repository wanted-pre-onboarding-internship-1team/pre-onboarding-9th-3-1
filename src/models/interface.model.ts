interface ChartValue {
  id: string;
  value_area: number;
  value_bar: number;
}

interface ChartList extends ChartValue {
  key: Array<string>;
}

export type { ChartList };
