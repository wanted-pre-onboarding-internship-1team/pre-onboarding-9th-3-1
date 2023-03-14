type ChartValue = {
  id: string;
  value_area: number;
  value_bar: number;
};

type ChartList = {
  [key: string]: ChartValue;
};

export type { ChartList };
