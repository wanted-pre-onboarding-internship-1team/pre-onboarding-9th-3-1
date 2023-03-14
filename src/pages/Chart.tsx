import useDataList from '../hooks/useDataList';
import styled from 'styled-components';

export default function Chart() {
  const { dataList, isLoading } = useDataList();

  if (isLoading) {
    return <div>로딩중</div>;
  }

  const minArea = dataList.reduce((prev, curr) => {
    return Math.min(prev, curr.data.value_area);
  }, Number.POSITIVE_INFINITY);
  const maxArea = dataList.reduce((prev, curr) => {
    return Math.max(prev, curr.data.value_area);
  }, 0);

  const minBar = dataList.reduce((prev, curr) => {
    return Math.min(prev, curr.data.value_bar);
  }, Number.POSITIVE_INFINITY);
  const maxBar = dataList.reduce((prev, curr) => {
    return Math.max(prev, curr.data.value_bar);
  }, 0);

  return (
    <ChartWrapper>
      {/* <div>value_bar</div> */}
      <ValueArea>
        <MaxArea>max : {maxArea}</MaxArea>
        <MinArea>min : {minArea}</MinArea>
      </ValueArea>
      <ChartDiv>
        <ul>
          {dataList.map(({ timestamp, data }) => {
            return <li key={timestamp}>{data.value_bar}</li>;
          })}
        </ul>
      </ChartDiv>
      <ValueBar>
        <MaxBar>max : {maxBar}</MaxBar>
        <MinBar>min : {minBar}</MinBar>
      </ValueBar>
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
