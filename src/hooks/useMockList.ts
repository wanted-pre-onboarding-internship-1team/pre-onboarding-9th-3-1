import { api } from '../apis';
import { GetMockResponse } from '../apis/types/mock';
import { useEffect, useState } from 'react';

export default function useMockList() {
  const [originData, setOriginData] = useState<GetMockResponse['response']>();

  const dateList = originData ? Object.keys(originData) : [];

  const timeList = originData
    ? Object.keys(originData).map(time => time.split(' ')[1])
    : [];

  const idList = originData
    ? Object.values(originData).map(entry => entry.id)
    : [];

  const barValueList = originData
    ? Object.values(originData).map(entry => entry.value_bar)
    : [];

  const areaValueList = originData
    ? Object.values(originData).map(entry => entry.value_area)
    : [];

  useEffect(() => {
    api.mock.getMockDatas().then(res => {
      const { data } = res;
      setOriginData(data.response);
    });
  }, []);

  return { timeList, dateList, idList, barValueList, areaValueList };
}
