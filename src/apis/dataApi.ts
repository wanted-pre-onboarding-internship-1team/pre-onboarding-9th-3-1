import { DataResponse } from '../types/data.types';
import axios from 'axios';

export const getDataApi = () => {
  return axios
    .get<DataResponse>('/data/mock_data_example-flexsys.json')
    .then(response => response.data.response);
};

export default getDataApi;
