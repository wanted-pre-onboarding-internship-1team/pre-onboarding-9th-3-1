import { API, ChartMap } from '../interfaces/API';
import { ChartData } from '../interfaces/ChartData';
import { useEffect, useRef } from 'react';

const useChart = (api: API) => {
  const dataSet = useRef<ChartMap>({});

  const getChartData = (timeStamp: string): ChartData => {
    return dataSet.current[timeStamp];
  };

  const getKeys = () => {
    return Object.keys(dataSet.current);
  };

  useEffect(() => {
    api.fetchData().then(res => (dataSet.current = res.response));
  }, [api]);

  return [dataSet, { getChartData, getKeys }];
};

export default useChart;
