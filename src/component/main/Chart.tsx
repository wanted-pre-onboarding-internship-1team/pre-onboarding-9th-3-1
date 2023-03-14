import useDataList from '../../hooks/useDataList';
import { calcPositionRatio } from '../../utils/value';
import Area from './Area';
import Bar from './Bar';
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
      {/* <div>value_bar</div> */}
      <Area dataList={dataList} />
      {/* <ChartDiv> */}
      <DataList>
        {dataList.map(({ timestamp, data }, idx) => {
          return (
            <DataItem
              style={{ left: calcPositionRatio(idx, dataList.length) }}
              key={timestamp}>
              <ChartData>
                <DataBar
                  style={{
                    height: calcPositionRatio(data.value_bar, maxBar),
                  }}
                />
                <DataArea
                  style={{
                    height: calcPositionRatio(data.value_area, maxArea),
                  }}
                />
              </ChartData>
              <DataText>{idx}</DataText>
            </DataItem>
          );
        })}
      </DataList>
      {/* </ChartDiv> */}
      <Bar dataList={dataList} />
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  display: flex;
`;
// const ChartDiv = styled.div`
//   border: solid black 1px;
//   width: 500px;
//   height: 500px;
// `;
const DataList = styled.ul`
  display: flex;
  width: 800px;
  height: 500px;
  border: solid black 1px;
  position: relative;
`;
const DataItem = styled.li`
  position: relative;
  font-size: 1px;
  height: 100%;
`;
const ChartData = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 3px;
  height: 100%;
`;
const DataBar = styled.div`
  background-color: yellow;
  width: 1.5px;
  position: absolute;
  bottom: 0;
`;
const DataArea = styled.div`
  background-color: blue;
  width: 1.5px;
  left: 1.5px;
  position: absolute;
  bottom: 0;
`;
const DataText = styled.span`
  position: absolute;
  bottom: -10px;
`;
