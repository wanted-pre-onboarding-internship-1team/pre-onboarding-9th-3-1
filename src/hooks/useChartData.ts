import useData from './useData';
import useGetData from './useGetData';
import { useEffect } from 'react';

const useChartData = () => {
  const data = useData();
  const getData = useGetData();

  useEffect(() => {
    getData();
  }, []);

  const categories = Object.keys(data);
  const id = Object.values(data).map(data => data.id);
  const barData = Object.values(data).map(data => data.value_bar);
  const areaData = Object.values(data).map(data => data.value_area);

  return { categories, id, barData, areaData };
};

export default useChartData;
