import { SPLIT_AMOUNT } from '../../const/value';
import { ChartData } from '../../interface/Data';
import { calcPositionRatio, createValueData } from '../../utils/value';
import styled from 'styled-components';

export default function Bar({ dataList }: { dataList: ChartData[] }) {
  const minBar = dataList.reduce((prev, curr) => {
    return Math.min(prev, curr.data.value_bar);
  }, Number.POSITIVE_INFINITY);
  const maxBar = dataList.reduce((prev, curr) => {
    return Math.max(prev, curr.data.value_bar);
  }, 0);

  const barValues = createValueData(minBar, maxBar, SPLIT_AMOUNT);
  return (
    <ValueBar>
      {barValues.map((value, idx) => {
        return (
          <BarText
            style={{ bottom: calcPositionRatio(idx, SPLIT_AMOUNT) }}
            key={value}>
            {value}
          </BarText>
        );
      })}
    </ValueBar>
  );
}

const ValueBar = styled.div`
  position: relative;
  height: 500px;
  background-color: red;
  width: 200px;
`;

const BarText = styled.span`
  position: absolute;
  left: 0;
`;
