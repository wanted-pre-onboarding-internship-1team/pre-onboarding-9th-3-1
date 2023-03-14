import axios from 'axios';
import { ChartList } from '../models/interface.model';

export const getChartData = async () => {
  try {
    return await axios.get('/data/mock_data.json');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return 'data error';
    }
  }
};
