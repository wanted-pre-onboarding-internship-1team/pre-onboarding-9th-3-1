import styled from 'styled-components';

export default function SampleGraph() {
  const yaxis = [35, 30, 25, 20, 15, 10, 5, 0];
  const xaxis = ['목록1', '목록2', '목록3'];
  const barList = [{ height: 100 }, { height: 70 }, { height: 30 }];
  return (
    <GraphWrapper>
      <Title>제목</Title>
      <Graph>
        <YAxis>
          {yaxis.map(yValue => {
            return (
              <YAxisLi>
                <YAxisLiText> {yValue}</YAxisLiText>
              </YAxisLi>
            );
          })}
        </YAxis>
        <XAxis>
          {xaxis.map(xValue => {
            return (
              <XAxisLi>
                <XAxisText>{xValue}</XAxisText>
              </XAxisLi>
            );
          })}
        </XAxis>
        <BarList>
          {barList.map(({ height }) => {
            return (
              <Bar style={{ height }}>
                <BarText></BarText>
              </Bar>
            );
          })}
        </BarList>
      </Graph>
    </GraphWrapper>
  );
}

const GraphWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;
const Title = styled.strong`
  font-size: 16px;
  font-weight: 500;
  color: #333333;
`;
const Graph = styled.div`
  position: relative;
  height: 185px;
  margin-top: 15px;
`;
const YAxis = styled.ul`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const YAxisLi = styled.li`
  position: relative;
  width: calc(100% - 20px);
  height: calc(100% / 8);
  margin-left: 20px;
  border-top: 1px solid #8c8c8c;
  text-align: left;
`;
const YAxisLiText = styled.span`
  position: absolute;
  top: -7px;
  left: -20px;
  font-size: 12px;
  line-height: 1;
`;
const XAxis = styled.ul`
  position: absolute;
  display: flex;
  bottom: -8px;
  left: 20px;
  width: calc(100% - 20px);
  justify-content: space-around;
  text-align: center;
  z-index: 2;
`;
const XAxisLi = styled.li`
  font-size: 12px;
`;
const XAxisText = styled.span``;

const BarList = styled.ul`
  display: flex;
  position: absolute;
  left: 20px;
  bottom: 16px;
  width: calc(100% - 20px);
  height: calc(100% - 16px);
  justify-content: space-around;
  align-items: flex-end;
  text-align: center;
  z-index: 3;
`;
const Bar = styled.li`
  flex-grow: 1;
  margin: 0 10px;
  & before {
    content: '';
    position: absolute;
    top: -2px;
    left: 3px;
    height: calc(100 % + 4px);
    width: 1px;
    background: #8c8c8c;
  }
`;
const BarText = styled.span`
  display: inline-block;
  max-width: 80px;
  width: 100%;
  height: 100%;
  background: #f1cb7e;
`;
