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
            mode: 'light',
          },

          grid: { show: false },

          yaxis: {
            show: false,
          },

          colors: ['red'],
        }}
      />
    </div>
  );
}