import { getData } from '../apis/api';
import { ChartData } from '../interface/Data';
import { useEffect, useState } from 'react';

export default function useDataList() {
  const [dataList, setDataList] = useState([] as ChartData[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData().then(res => {
      const resObjectList = Object.entries(res)
        .map(([key, data]) => {
          return {
            timestamp: key,
            data,
          };
        })
        .sort((data1, data2) => {
          return new Date(data1.timestamp) <= new Date(data2.timestamp)
            ? -1
            : 1;
        });
      setDataList(resObjectList);
      setIsLoading(false);
    });
  }, []);
  return { dataList, isLoading };
}
