import { getData } from '../apis/api';
import { ChartData, ID } from '../interface/Data';
import { Data, DataValue } from '../interface/ResponseData';
import { createZeroTimeStamp } from '../utils/date';
import { useEffect, useState } from 'react';

export default function useDataList() {
  const [dataList, setDataList] = useState([] as ChartData[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData().then(res => {
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

      const resObjectList: ChartData[] = [];
      for (const [date, dataList] of timeStampDataMap.entries()) {
        const idDataMap = new Map<string, DataValue[]>();
        dataList.forEach(data => {
          if (idDataMap.has(data.id)) {
            idDataMap.get(data.id)?.push({ ...data });
            return;
          }
          idDataMap.set(data.id, [{ ...data }]);
        });

        for (const [id, dataValues] of idDataMap.entries()) {
          const valueAreaSum = dataValues.reduce((prev, data) => {
            return prev + data.value_area;
          }, 0);
          const valueAreaAverage = valueAreaSum / dataValues.length;

          const valueBarSum = dataValues.reduce((prev, data) => {
            return prev + data.value_bar;
          }, 0);
          const valueBarAverage = valueBarSum / dataValues.length;
          resObjectList.push({
            timestamp: date.toLocaleString(),
            data: {
              id,
              value_area: valueAreaAverage,
              value_bar: valueBarAverage,
            },
          });
        }
      }

      resObjectList.sort((data1, data2) => {
        return data1.timestamp <= data2.timestamp ? -1 : 1;
      });
      setDataList(resObjectList);
      setIsLoading(false);
    });
  }, []);
  return { dataList, isLoading };
}
