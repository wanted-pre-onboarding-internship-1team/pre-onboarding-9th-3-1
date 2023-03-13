import axios, { AxiosResponse } from 'axios';

type ChartValue = {
  id: string;
  value_area: number;
  value_bar: number;
};

interface ChartList {
  [index: string]: ChartValue;
}

async function getChartData() {
  try {
    const { data } = await axios.get('/data/mock_data.json');

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'data error';
    }
  }
}

export { getChartData };
