import { api } from '../apis';
import { GetMockResponse } from '../apis/types/mock';
import { useEffect, useState } from 'react';

export default function useMockList() {
  const [originData, setOriginData] = useState<GetMockResponse['response']>();

  const idList = originData ? Object.keys(originData) : [];

  const varValueList = originData
    ? Object.entries(originData).map(entry => entry[1].value_var)
    : [];

  const areaValueList = originData
    ? Object.entries(originData).map(entry => entry[1].value_area)
    : [];

  useEffect(() => {
    api.mock.getMockDatas().then(res => {
      const { data } = res;
      setOriginData(data.response);
    });
  }, []);
  return originData;
}
