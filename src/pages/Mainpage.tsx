import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { getChartData } from '../apis/api';
import useChartdata from '../hooks/useChartdata';

export default function Mainpage() {
  const chartData = useChartdata();

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
