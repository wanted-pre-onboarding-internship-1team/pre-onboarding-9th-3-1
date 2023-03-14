import { DataContext } from '../../contexts/DataProvider';
import React, { useContext } from 'react';
import ApexCharts from 'react-apexcharts';
import Item from '@/types/Item';
export default function Chart() {
  const { data } = useContext(DataContext);

  const areaValues = Object.values(data).map((item: Item, index) => {
    return {
      y: item.value_area,
      x: index,
      id: item.id,
      area: item.value_area,
      bar: item.value_bar,
    };
  });
  const barValues = Object.values(data).map((item: Item, index) => {
    return {
      y: item.value_bar,
      x: index,
      id: item.id,
      area: item.value_area,
      bar: item.value_bar,
    };
  });

  const series = [
    {
      name: 'AreaValue',
      type: 'area',
      data: areaValues,
    },
    {
      name: 'BarValue',
      type: 'column',
      data: barValues,
    },
  ];

  return (
    <div>
      <ApexCharts
        options={{
          chart: { id: 'test' },
          xaxis: { categories: Object.keys(data) },
          yaxis: [
            {
              title: {
                text: 'area',
              },
            },
            {
              opposite: true,
              title: {
                text: 'bar',
              },
            },
          ],
          tooltip: {
            x: {
              show: true,
            },
            custom: function ({ seriesIndex, dataPointIndex, w }) {
              const data =
                w.globals.initialSeries[seriesIndex].data[dataPointIndex];

              return `
      id : ${data.id}<br />
      value_area : ${data.area}<br />
      value_bar : ${data.bar}<br />
      `;
            },
          },
        }}
        series={series}
        height='600'
      />
    </div>
  );
}
