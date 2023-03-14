import React from 'react';
import ApexCharts from 'react-apexcharts';

export default function Mainpage() {
  return (
    <div>
      <ApexCharts
        height='500'
        width='500'
        series={[
          {
            name: 'Desktops',
            type: 'column',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
          },
        ]}
        options={{
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
