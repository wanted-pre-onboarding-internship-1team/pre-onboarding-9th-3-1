import React from 'react';
import ApexCharts from 'react-apexcharts';

export default function Mainpage() {
  return (
    <div>
      <ApexCharts
        type='line'
        series={[
          {
            name: 'Desktops',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
          },
        ]}
        options={{
          chart: {
            height: 200,
            width: 200,
            toolbar: {
              show: false,
            },
          },
          theme: {
            mode: 'dark',
          },

          grid: { show: false },
          stroke: {
            curve: 'smooth',
            width: 10,
          },
          yaxis: {
            show: false,
          },

          fill: {
            type: 'gradient',
            gradient: { gradientToColors: ['blue'], stops: [0, 100] },
          },
          colors: ['red'],
        }}
      />
    </div>
  );
}
