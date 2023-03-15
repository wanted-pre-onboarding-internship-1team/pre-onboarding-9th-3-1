import axios from 'axios';

export const getDataApi = () => {
  return axios
    .get('/data/mock_data_example-flexsys.json')
    .then(response => response.data.response);
};

export default getDataApi;
