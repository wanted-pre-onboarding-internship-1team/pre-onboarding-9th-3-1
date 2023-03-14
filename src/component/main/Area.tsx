import { ChartData } from '../../interface/Data';
import styled from 'styled-components';

export default function Area({ dataList }: { dataList: ChartData[] }) {
  const minArea = dataList.reduce((prev, curr) => {
    return Math.min(prev, curr.data.value_area);
  }, Number.POSITIVE_INFINITY);
  const maxArea = dataList.reduce((prev, curr) => {
    return Math.max(prev, curr.data.value_area);
  }, 0);

  const areaValues = [];
  const areaGap = (maxArea - minArea) / 9;
  for (let i = 0; i <= 9; i++) {
    areaValues.push(Math.round(minArea + i * areaGap));
  }

  return (
    <ValueArea>
      {areaValues.map(value => {
        return (
          <AreaText
            style={{ bottom: `${(value / maxArea) * 100}%` }}
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
