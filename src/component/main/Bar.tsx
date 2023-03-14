import { ChartData } from '../../interface/Data';
import styled from 'styled-components';

export default function Bar({ dataList }: { dataList: ChartData[] }) {
  const minBar = dataList.reduce((prev, curr) => {
    return Math.min(prev, curr.data.value_bar);
  }, Number.POSITIVE_INFINITY);
  const maxBar = dataList.reduce((prev, curr) => {
    return Math.max(prev, curr.data.value_bar);
  }, 0);
  return (
    <ValueBar>
      <MaxBar>max : {maxBar}</MaxBar>
      <MinBar>min : {minBar}</MinBar>
    </ValueBar>
  );
}

const ValueBar = styled.div`
  position: relative;
  height: 500px;
  background-color: red;
  width: 200px;
`;
const MaxBar = styled.span`
  position: absolute;
  top: 0;
`;
const MinBar = styled.span`
  position: absolute;
  bottom: 0;
`;
