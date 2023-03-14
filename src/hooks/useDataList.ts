import { getData } from '../apis/api';
import { ChartData } from '../interface/Data';
import { Data } from '../interface/ResponseData';
import { createZeroTimeStamp } from '../utils/date';
import { useEffect, useState } from 'react';

type Res =
  | never[]
  | {
      [key: string]: Data;
    };

export default function useDataList() {
  const [dataList, setDataList] = useState([] as ChartData[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData().then(res => {
      const timeStampDataMap = createTimeStampDataMap(res);
      const resObjectList: ChartData[] = createChartData(timeStampDataMap);
      resObjectList.sort((data1, data2) => {
        return data1.timestamp <= data2.timestamp ? -1 : 1;
      });
      setDataList(resObjectList);
      setIsLoading(false);
    });
  }, []);
  return { dataList, isLoading };
}

/**
 * resObjectList 생성을 위한 util 함수들
 */

const createTimeStampDataMap = (res: Res) => {
  const timeStampDataMap = new Map<string, Data[]>();
  Object.entries(res).forEach(([date, data]) => {
    const zeroSecondTimeStamp = createZeroTimeStamp(date);
    const localeString = zeroSecondTimeStamp.toLocaleString();
    if (timeStampDataMap.has(localeString)) {
      timeStampDataMap.get(localeString)?.push(data);
      return;
    }
    timeStampDataMap.set(localeString, [data]);
  });

  return timeStampDataMap;
};

const createChartData = (timeStampDataMap: Map<string, Data[]>) => {
  const resObjectList: ChartData[] = [];

  for (const [date, dataList] of timeStampDataMap.entries()) {
    const idSet = dataList.reduce((prev, data) => {
      return prev.add(data.id);
    }, new Set<string>());
    const valueAreaSum = dataList.reduce((prev, data) => {
      return prev + data.value_area;
    }, 0);
    const valueAreaAverage = valueAreaSum / dataList.length;

    const valueBarSum = dataList.reduce((prev, data) => {
      return prev + data.value_bar;
    }, 0);

    const valueBarAverage = valueBarSum / dataList.length;
    resObjectList.push({
      timestamp: date.toLocaleString(),
      data: {
        value_area: valueAreaAverage,
        value_bar: valueBarAverage,
      },
      idSet,
    });
  }
  return resObjectList;
};
