import useDataList from '../hooks/useDataList';
import styled from 'styled-components';

export default function Mainpage() {
  const { dataList, isLoading } = useDataList();

  if (isLoading) {
    return <div>로딩중</div>;
  }
  return (
    <WrapperDiv>
      <ContentDiv>
        <ChartDiv>
          <div>value_bar</div>
          <ul>
            {dataList.map(({ timestamp, data }) => {
              return <li key={timestamp}>{data.value_bar}</li>;
            })}
          </ul>
        </ChartDiv>
      </ContentDiv>
    </WrapperDiv>
  );
}

const ChartDiv = styled.div`
  border: solid black 1px;
  width: 500px;
  height: 500px;
`;

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #301e4e;
`;

const ContentDiv = styled.div`
  font-family: system-ui, serif;
  font-size: 2rem;
  padding: 3rem;
  border-radius: 1rem;
  background: #ff6e6c;
`;
