import { SPLIT_AMOUNT } from '../../const/value';
import { ChartData } from '../../interface/Data';
import { createValueData, calcPositionRatio } from '../../utils/value';
import styled from 'styled-components';

export default function Area({ dataList }: { dataList: ChartData[] }) {
  const minArea = dataList.reduce((prev, curr) => {
    return Math.min(prev, curr.data.value_area);
  }, Number.POSITIVE_INFINITY);
  const maxArea = dataList.reduce((prev, curr) => {
    return Math.max(prev, curr.data.value_area);
  }, 0);

  const areaValues = createValueData(minArea, maxArea, SPLIT_AMOUNT);

  return (
    <ValueArea>
      {areaValues.map((value, idx) => {
        return (
          <AreaText
            style={{ bottom: calcPositionRatio(idx, SPLIT_AMOUNT) }}
            key={value}>
            {value}
          </AreaText>
        );
      })}
    </ValueArea>
  );
}

const ValueArea = styled.div`
  position: relative;
  height: 500px;
  background-color: red;
  width: 200px;
`;

const AreaText = styled.span`
  position: absolute;
  right: 0;
`;
