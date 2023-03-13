type ChartValue = {
  id: string;
  value_area: number;
  value_bar: number;
};

interface ChartList {
  [index: string]: ChartValue;
}

export type { ChartList };
