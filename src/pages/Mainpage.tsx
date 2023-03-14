import useDataList from '../hooks/useDataList';
import { Suspense } from 'react';

export default function Mainpage() {
  const { dataList, isLoading } = useDataList();

  return (
    <Suspense fallback={<div>로딩중</div>}>
      <ul>
        {dataList.map(data => {
          return <div>{data.timestamp}</div>;
        })}
      </ul>
    </Suspense>
  );
}
