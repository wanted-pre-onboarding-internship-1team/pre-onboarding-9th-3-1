import Area from '../component/main/Area';
import Bar from '../component/main/Bar';
import useDataList from '../hooks/useDataList';
import styled from 'styled-components';

export default function Chart() {
  const { dataList, isLoading } = useDataList();

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <ChartWrapper>
      {/* <div>value_bar</div> */}
      <Area dataList={dataList} />
      <ChartDiv>
        <ul>
          {dataList.map(({ timestamp, data }) => {
            return <li key={timestamp}>{data.value_bar}</li>;
          })}
        </ul>
      </ChartDiv>
      <Bar dataList={dataList} />
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  display: flex;
`;
const ChartDiv = styled.div`
  border: solid black 1px;
  width: 500px;
  height: 500px;
`;
