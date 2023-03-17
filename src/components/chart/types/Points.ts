export type Points = {
  x: string;
  y: number;
  label?: {
    text: string;
    borderColor: string;
    offsetY: number;
  };
  seriesIndex?: number;
  marker: {
    size: number;
    strokeColor: string;
    radius: number;
  };
};
