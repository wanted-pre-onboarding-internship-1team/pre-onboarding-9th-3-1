import { API, ChartMap } from '../interfaces/API';
import { ChartData } from '../interfaces/ChartData';
import { useEffect, useRef } from 'react';

type UseChartProps = {
  getChartData: (s: string) => ChartData;
  getKeys: () => string[];
};

const useChart = (api: API): UseChartProps => {
  const dataSet = useRef<ChartMap>({});

  useEffect(() => {
    api.fetchData().then(res => (dataSet.current = res.response));
  }, [api]);

  const getChartData = (timeStamp: string): ChartData => {
    return dataSet.current[timeStamp];
  };

  const getKeys = () => {
    return Object.keys(dataSet.current);
  };

  return { getChartData, getKeys };
};

export default useChart;
