import Chart from '../components/chart/Chart';
import ChartHeader from '../components/chart/ChartHeader';
import styled from 'styled-components';

export default function Mainpage() {
  return (
    <Container>
      <ChartHeader />
      <Chart />
    </Container>
  );
}

const Container = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
