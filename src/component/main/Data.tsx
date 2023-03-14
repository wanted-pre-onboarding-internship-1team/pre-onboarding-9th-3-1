import { ChartData } from '../../interface/Data';
import { calcPositionRatio } from '../../utils/value';
import styled from 'styled-components';

interface Props {
  chartData: ChartData;
  maxBar: number;
  maxArea: number;
  idx: number;
  dataListLength: number;
}
export default function Data({
  chartData,
  maxBar,
  maxArea,
  idx,
  dataListLength,
}: Props) {
  return (
    <DataItem
      style={{ left: calcPositionRatio(idx, dataListLength) }}
      key={chartData.timestamp}>
      <DataWrapper>
        <DataBar
          style={{
            height: calcPositionRatio(chartData.data.value_bar, maxBar),
          }}
        />
        <DataArea
          style={{
            height: calcPositionRatio(chartData.data.value_area, maxArea),
          }}
        />
      </DataWrapper>
      <DataText>{'dd'}</DataText>
    </DataItem>
  );
}

const DataItem = styled.li`
  position: relative;
  font-size: 1px;
  height: 100%;
`;

const DataWrapper = styled.div`
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
