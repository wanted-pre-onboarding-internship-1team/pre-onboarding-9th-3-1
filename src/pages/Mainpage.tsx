import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { getChartData } from '../apis/api';

export default function Mainpage() {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    getChartData().then(data => {
      console.log(data);
      setChartData(data);
    });
  }, []);

  return (
    <div style={{ width: '1200px', margin: '50px auto' }}>
      <Chart
        chartType='ScatterChart'
        data={[
          ['Age', 'Weight'],
          [4, 5.5],
          [8, 12],
        ]}
        width='100%'
        height='400px'
        legendToggle
      />
    </div>
  );
}
