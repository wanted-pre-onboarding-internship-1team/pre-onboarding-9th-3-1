import { DATA_URL } from '../const/url';
import { DataResponse } from '../interface/ResponseData';
import axios from 'axios';

export const getData = async () => {
  try {
    return (await axios.get<DataResponse>(DATA_URL)).data.response;
  } catch (error) {
    console.error(error);
    return [];
  }
};
