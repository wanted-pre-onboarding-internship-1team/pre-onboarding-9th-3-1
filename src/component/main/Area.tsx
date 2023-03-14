import { ChartData } from '../../interface/Data';
import styled from 'styled-components';

export default function Area({ dataList }: { dataList: ChartData[] }) {
  const minArea = dataList.reduce((prev, curr) => {
    return Math.min(prev, curr.data.value_area);
  }, Number.POSITIVE_INFINITY);
  const maxArea = dataList.reduce((prev, curr) => {
    return Math.max(prev, curr.data.value_area);
  }, 0);
  return (
    <ValueArea>
      <MaxArea>max : {maxArea}</MaxArea>
      <MinArea>min : {minArea}</MinArea>
    </ValueArea>
  );
}

const ValueArea = styled.div`
  position: relative;
  height: 500px;
  background-color: red;
  width: 200px;
`;
const MaxArea = styled.span`
  position: absolute;
  top: 0;
`;
const MinArea = styled.span`
  position: absolute;
  bottom: 0;
`;
