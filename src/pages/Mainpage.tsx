import { useEffect, useState } from 'react';
import { ReactGoogleChartEvent, Chart } from 'react-google-charts';
import { getChartData } from '../apis/api';
import useChartdata from '../hooks/useChartdata';

export default function Mainpage() {
  const [loading, dataTable] = useChartdata();

  const options = {
    title: '플렉시스 chart',
    seriesType: 'bars',
    series: { 1: { type: 'area' } },
    legend: 'none',
    tooltip: { isHtml: true },
  };

  const chartEvents: ReactGoogleChartEvent[] = [
    {
      eventName: 'select',
      callback: ({ chartWrapper }) => {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();
        if (selection.length === 1) {
          const [selectedItem] = selection;
          const dataTable = chartWrapper.getDataTable();
          const { row, column } = selectedItem;

          console.log(chartWrapper);

          console.log('You selected:', {
            row,
            column,
            value: dataTable?.getValue(row, column),
          });
        }
      },
    },
  ];

  const renderChart = loading
    ? 'Loading.....'
    : dataTable && (
        <Chart
          chartType='ComboChart'
          data={dataTable}
          width='100%'
          height='400px'
          options={options}
          chartEvents={chartEvents}
          chartWrapperParams={{ view: { columns: [0, 2, 4, 5, 6] } }}
        />
      );

  return (
    <div style={{ width: '1200px', margin: '50px auto' }}>{renderChart}</div>
  );
}
