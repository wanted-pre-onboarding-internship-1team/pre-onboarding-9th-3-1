import { getData } from '../apis/api';
import { ChartData } from '../interface/Data';
import { createChartData, createTimeStampDataMap } from '../utils/chartData';
import { useEffect, useState } from 'react';

export default function useDataList() {
  const [dataList, setDataList] = useState([] as ChartData[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData().then(res => {
      const timeStampDataMap = createTimeStampDataMap(res);
      const resObjectList: ChartData[] = createChartData(timeStampDataMap);
      resObjectList.sort((data1, data2) =>
        data1.timestamp <= data2.timestamp ? -1 : 1
      );
      setDataList(resObjectList);
      setIsLoading(false);
    });
  }, []);
  return { dataList, isLoading };
}
