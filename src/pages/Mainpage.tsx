import SampleGraph from '../component/main/SampleGraph';
import useDataList from '../hooks/useDataList';
import Chart from './Chart';
import styled from 'styled-components';

export default function Mainpage() {
  return (
    <WrapperDiv>
      <ContentDiv>
        <Chart />
        {/* <SampleGraph /> */}
      </ContentDiv>
    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #eee;
`;

const ContentDiv = styled.div`
  font-family: system-ui, serif;
  font-size: 2rem;
  padding: 3rem;
  border-radius: 1rem;
  background: white;
`;
