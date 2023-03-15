import { getData } from '../apis/api';
import ChartDataType from '../types/chartData';
import CustomTooltip from './CustomTooltip';
import { useEffect, useState } from 'react';
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function Chart() {
  const [chartData, setChartData] = useState<ChartDataType[]>([]);

  useEffect(() => {
    getData().then((res: ChartDataType) => {
      const response = Object.entries(res).map(([time, values]) => ({
        time: new Date(time).toLocaleTimeString('en-US'),
        ...values,
      }));
      setChartData(response);
    });
  });
  return (
    <ResponsiveContainer width='100%' aspect={4 / 1}>
      <ComposedChart data={chartData} margin={{ right: 50 }}>
        <defs>
          <linearGradient id='value_area' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='50%' stopColor='#243c98' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#243c98' stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke='#f5f5f5' strokeDasharray={3} />
        <XAxis
          dataKey='time'
          label={{ position: 'insideBottomRight', offset: -10 }}
          stroke='#fff'
        />
        <YAxis
          yAxisId='left'
          domain={[0, 150]}
          label={{ value: 'value_area', position: 'top', offset: 10 }}
        />
        <YAxis
          yAxisId='right'
          orientation='right'
          label={{ value: 'value_bar', position: 'top', offset: 10 }}
        />
        <Tooltip content={CustomTooltip} />
        <Legend />
        <Bar yAxisId='right' dataKey='value_bar' fill='#fff' />
        <Area
          yAxisId='left'
          dataKey='value_area'
          stroke='#3658df'
          fillOpacity={1}
          fill='url(#value_area)'
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
