import useChartOption from '../hooks/useChartOption';
import useSeries from '../hooks/useSeries';
import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';

export default function Chart() {
  const series = useSeries();
  const { chartOptions } = useChartOption();
  return (
    <Container>
      <ApexCharts options={chartOptions} series={series} height={600} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1200px;

  .arrow-box {
  }

  .arrow-box li {
    padding: 5px 10px;
  }

  .arrow-box__item {
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;
