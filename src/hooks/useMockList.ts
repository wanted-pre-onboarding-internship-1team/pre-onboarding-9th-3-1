import { api } from '../apis';
import { GetMockResponse } from '../apis/types/mock';
import { useEffect, useState } from 'react';

export default function useMockList() {
  const [originData, setOriginData] = useState<GetMockResponse['response']>();
  const [selectedID, setSelectID] = useState('전체');

  const [idSet, setIdSet] = useState<Set<string>>(new Set());

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
  useEffect(() => {
    if (originData) {
      const newSet = Object.values(originData).reduce((prevSet, curr) => {
        return prevSet.add(curr.id);
      }, new Set(['전체']));
      setIdSet(newSet);
    }
  }, [originData]);

  return {
    timeList,
    dateList,
    idList,
    barValueList,
    areaValueList,
    selectedID,
    setSelectID,
    idSet,
  };
}
