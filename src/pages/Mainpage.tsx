import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { ChartList } from '../models/interface.model';

export default function Mainpage() {
  const [chartData, setChartData] = useState<ChartList>();

  useEffect(() => {
    axios.get('/data/mock_data.json').then(response => {
      if (response.data) {
        const result = response.data;
        setChartData(result.slice(0));
      }
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
