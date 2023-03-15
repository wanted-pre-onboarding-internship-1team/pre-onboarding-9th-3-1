import React, { useEffect, useRef, useState } from 'react';
import { getChartData } from '../apis/api';

const useChartdata = () => {
  const [chartData, setChartData] = useState([]);
  // const [chartDataTable, setChartDataTable] = useState([]);

  useEffect(() => {
    getChartData().then(({ data }) => setChartData(data));
  }, []);

  const formatData = new Promise(resolve => {
    const keyArray = ['time', ...Object.keys(chartData)];
    const valueArray = [
      ...Object.values(chartData).map(item => Object.values(item)),
    ];
    resolve({ keyArray: keyArray, valueArray: valueArray });
  });

  formatData.then(data => {
    // console.log('프라미스');
    // console.log(data);
    const chartDataTable = [[...data.keyArray], [...data.valueArray]];
    console.log(chartDataTable);
    // setChartDataTable([[data.keyArray], [data.valueArray]]);
  });

  return chartData;
};

export default useChartdata;

function drawComboChart() {
  let jsonData = {
    cols: [
      {
        label: 'Game',
        type: 'string',
      },
      {
        label: 'Win',
        type: 'number',
      },
      {
        role: 'tooltip',
        type: 'string',
      },
      {
        label: 'Defeat',
        type: 'number',
      },
      {
        role: 'tooltip',
        type: 'string',
      },
      {
        label: 'Draw',
        type: 'number',
      },
      {
        role: 'tooltip',
        type: 'string',
      },
      {
        label: 'Opponent score',
        type: 'number',
      },
      {
        role: 'tooltip',
        type: 'string',
      },
    ],
    rows: [
      {
        c: [
          {
            v: 646,
          },
          {
            v: 0,
          },
          {
            v: 'Game 646 0:10 lost',
          },
          {
            v: 0,
          },
          {
            v: 'Game 646 0:10 lost',
          },
          {
            v: 0,
          },
          {
            v: 'Game 646 0:10 lost',
          },
          {
            v: 10,
          },
          {
            v: 'Game 646 0:10 lost',
          },
        ],
      },
      {
        c: [
          {
            v: 647,
          },
          {
            v: 0,
          },
          {
            v: 'Game 647 0:13 won',
          },
          {
            v: 0,
          },
          {
            v: 'Game 647 0:13 won',
          },
          {
            v: 0,
          },
          {
            v: 'Game 647 0:13 won',
          },
          {
            v: 13,
          },
          {
            v: 'Game 647 0:13 won',
          },
        ],
      },
      {
        c: [
          {
            v: 648,
          },
          {
            v: 22,
          },
          {
            v: 'Game 648 22:23 won',
          },
          {
            v: 0,
          },
          {
            v: 'Game 648 22:23 won',
          },
          {
            v: 0,
          },
          {
            v: 'Game 648 22:23 won',
          },
          {
            v: 23,
          },
          {
            v: 'Game 648 22:23 won',
          },
        ],
      },
      {
        c: [
          {
            v: 651,
          },
          {
            v: 13,
          },
          {
            v: 'Game 651 13:31 won',
          },
          {
            v: 0,
          },
          {
            v: 'Game 651 13:31 won',
          },
          {
            v: 0,
          },
          {
            v: 'Game 651 13:31 won',
          },
          {
            v: 31,
          },
          {
            v: 'Game 651 13:31 won',
          },
        ],
      },
      {
        c: [
          {
            v: 652,
          },
          {
            v: 85,
          },
          {
            v: 'Game 652 85:75 won',
          },
          {
            v: 0,
          },
          {
            v: 'Game 652 85:75 won',
          },
          {
            v: 0,
          },
          {
            v: 'Game 652 85:75 won',
          },
          {
            v: 75,
          },
          {
            v: 'Game 652 85:75 won',
          },
        ],
      },
      {
        c: [
          {
            v: 653,
          },
          {
            v: 0,
          },
          {
            v: 'Game 653 0:10 lost',
          },
          {
            v: 0,
          },
          {
            v: 'Game 653 0:10 lost',
          },
          {
            v: 0,
          },
          {
            v: 'Game 653 0:10 lost',
          },
          {
            v: 10,
          },
          {
            v: 'Game 653 0:10 lost',
          },
        ],
      },
      {
        c: [
          {
            v: 654,
          },
          {
            v: 18,
          },
          {
            v: 'Game 654 18:12 won',
          },
          {
            v: 0,
          },
          {
            v: 'Game 654 18:12 won',
          },
          {
            v: 0,
          },
          {
            v: 'Game 654 18:12 won',
          },
          {
            v: 12,
          },
          {
            v: 'Game 654 18:12 won',
          },
        ],
      },
      {
        c: [
          {
            v: 655,
          },
          {
            v: 0,
          },
          {
            v: 'Game 655 10:22 lost',
          },
          {
            v: 10,
          },
          {
            v: 'Game 655 10:22 lost',
          },
          {
            v: 0,
          },
          {
            v: 'Game 655 10:22 lost',
          },
          {
            v: 22,
          },
          {
            v: 'Game 655 10:22 lost',
          },
        ],
      },
    ],
  };
  let dt = new google.visualization.DataTable(jsonData);
  //dt.addColumn({type: 'string', role: 'tooltip'});
  let options = {
    width: 480,
    height: 360,
    legend: {
      position: 'top',
      alignment: 'center',
      maxLines: 2,
    },
    seriesType: 'steppedArea',
    series: {
      3: {
        type: 'line',
        lineWidth: 1,
        color: '000000',
        lineDashStyle: [4, 2],
      },
    },
  };

  let chart = new google.visualization.ComboChart(
    document.getElementById('chart_div')
  );
  chart.draw(dt, options);
}
