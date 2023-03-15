import axios from 'axios';

export const getData = async () => {
  const { data } = await axios.get('/data/mock_data.json');
  return data.response;
};
