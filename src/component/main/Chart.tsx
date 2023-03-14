import useDataList from '../../hooks/useDataList';
import Area from './Area';
import Bar from './Bar';
import Data from './Data';
import styled from 'styled-components';

export default function Chart() {
  const { dataList, isLoading } = useDataList();

  if (isLoading) {
    return <div>로딩중</div>;
  }

  const maxBar = dataList.reduce((prev, curr) => {
    return Math.max(prev, curr.data.value_bar);
  }, 0);
  const maxArea = dataList.reduce((prev, curr) => {
    return Math.max(prev, curr.data.value_area);
  }, 0);
  return (
    <ChartWrapper>
      <Area dataList={dataList} />
      <DataList>
        {dataList.map((chartData, idx) => {
          return (
            <Data
              chartData={chartData}
              maxBar={maxBar}
              maxArea={maxArea}
              idx={idx}
              dataListLength={dataList.length}
              key={chartData.timestamp}
            />
          );
        })}
      </DataList>
      <Bar dataList={dataList} />
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  display: flex;
`;
const DataList = styled.ul`
  display: flex;
  width: 800px;
  height: 500px;
  border: solid black 1px;
  position: relative;
`;
