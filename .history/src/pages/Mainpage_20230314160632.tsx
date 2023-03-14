import ApexCharts from 'apexcharts';
import React from 'react';

export default function Mainpage() {
  return (
    <>
      <ApexCharts
        type='line'
        series={[
          {
            name: 'price',
            data: [1, 2, 3, 4, 5, 6, 7, 5],
          },
        ]}
        options={{
          theme: {
            mode: 'dark',
          },
          chart: {
            height: 500,
            width: 500,
            toolbar: {
              show: false,
            },
          },
          grid: { show: false },
          stroke: {
            curve: 'smooth',
            width: 5,
          },

          fill: {
            type: 'gradient',
            gradient: { gradientToColors: ['blue'], stops: [0, 100] },
          },
          colors: ['red'],
          tooltip: {
            y: { formatter: value => `$${value.toFixed(3)}` },
          },
        }}
      />
    </>
  );
}
