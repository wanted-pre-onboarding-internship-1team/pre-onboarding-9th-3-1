import ApexCharts from 'apexcharts';
import React from 'react';

export default function Mainpage() {
  return (
    <ApexCharts
      type='line'
      series={[
        {
          name: 'price',
          data: data?.map(price => +price.close) as number[],
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
        yaxis: {
          show: false,
        },
        xaxis: {
          labels: { show: false },
          type: 'datetime',
          categories: data?.map(price =>
            new Date(+price.time_close * 1000).toISOString()
          ) as string[],
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
  );
}
