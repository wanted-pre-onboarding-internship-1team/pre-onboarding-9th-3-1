import React, { useEffect, useRef, useState } from 'react';
import { getChartData } from '../apis/api';

function createTooltip(value) {
  // console.log(data);
  return `<div style="padding:5px 5px 5px 5px;"><div><strong>${value.id}</strong></div><div><p>bar: ${value.value_bar}</p><p>area: ${value.value_area}</p></div> </div>`;
}

const useChartdata = () => {
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState([]);
  // const chartTable = useRef();

  useEffect(() => {
    setLoading(true);
    getChartData()
      .then(({ data }) => {
        const newDataArray = Object.entries(data).map(([key, value]) => {
          return [
            key,
            value.value_bar,
            createTooltip(value),
            value.value_area,
            createTooltip(value),
            value.id,
          ];
        });

        const dataTable = [
          [
            { label: 'Time', type: 'string' },
            { label: 'value_bar', type: 'number' },
            { role: 'tooltip', type: 'string', p: { html: true } },
            { label: 'value_area', type: 'number' },
            { role: 'tooltip', type: 'string', p: { html: true } },
            { label: 'id', type: 'string' },
          ],
          ...newDataArray,
        ];
        setChartData(dataTable);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // console.log(dataTable);
  // setChartTable([...dataTable]);
  // chartTable.current = dataTable;
  // setLoading(false);

  return [loading, chartData];
};

export default useChartdata;
