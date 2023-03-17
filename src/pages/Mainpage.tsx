import Chart from '../components/Chart';
import ChartHeader from '../components/ChartHeader';
import { DataProvider } from '../contexts/DataContext';
import styled from 'styled-components';

export default function Mainpage() {
  return (
    <DataProvider>
      <Container>
        <ChartHeader />
        <Chart />
      </Container>
    </DataProvider>
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
