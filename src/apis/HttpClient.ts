import { DataType } from '../types/DataType';
import { ValuesType } from '../types/ValueType';
import axios, { AxiosResponse } from 'axios';

export const httpClient = async (): Promise<
  AxiosResponse<ValuesType<DataType>>
> => {
  return await axios.get('/data/mock_data.json');
};
