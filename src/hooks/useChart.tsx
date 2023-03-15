import { API, ChartMap } from '../interfaces/API';
import { ChartData } from '../interfaces/ChartData';
import { useState, useEffect } from 'react';

export type UseChartProps = [
  ChartMap,
  {
    getChartData: (s: string) => ChartData;
    getKeys: () => string[];
  }
];

const useChart = (api: API): UseChartProps => {
  const [data, setData] = useState<ChartMap>({});

  useEffect(() => {
    api.fetchData().then(res => setData(res.response));
  }, []);

  const getChartData = (timeStamp: string): ChartData => {
    return data[timeStamp];
  };

  const getKeys = () => {
    return Object.keys(data);
  };

  return [data, { getChartData, getKeys }];
};

export default useChart;
