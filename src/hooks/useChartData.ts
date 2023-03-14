import useData from './useData';
import useGetData from './useGetData';
import { useEffect } from 'react';

const useChartData = () => {
  const data = useData();
  const getData = useGetData();

  useEffect(() => {
    !data && getData();
  }, [data, getData]);

  const categories = Object.keys(data || {});
  const barData = Object.values(data || {}).map(data => data.value_bar);
  const AreaData = Object.values(data || {}).map(data => data.value_area);

  return { categories, barData, AreaData };
};

export default useChartData;
