import Chart from 'react-apexcharts';
import styled from 'styled-components';

interface ParsedData {
  date: string;
  id: string;
  value_area: number;
  value_bar: number;
}

interface Props {
  parsedData: ParsedData[];
}

const ChartView = styled(Chart)`
  width: 800px;
`;

const CombinedChart = ({ parsedData }: Props) => {
  const options = {
    stroke: {
      width: [3, 3],
    },
    title: {
      text: '플렉시스 기업과제 Chart',
      align: 'center',
    },
    xaxis: {
      categories: parsedData.map(data => data.date),
    },
    yaxis: [
      { title: { text: 'Area' } },
      { title: { text: 'Bar' }, opposite: true },
    ],
  };

  const series = [
    {
      name: 'Area',
      type: 'line',
      data: parsedData.map(data => data.value_area),
    },

    {
      name: 'Bar',
      type: 'bar',
      data: parsedData.map(data => data.value_bar),
    },
  ];

  return <ChartView options={options} series={series} type='line' />;
};

export default CombinedChart;
