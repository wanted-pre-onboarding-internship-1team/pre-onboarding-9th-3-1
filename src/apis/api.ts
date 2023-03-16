import axios from 'axios';

interface Data {
  [key: string]: {
    id: string;
    value_area: number;
    value_bar: number;
  };
}

const url =
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/19736c70-c41c-4a4a-b45f-b866eebab626/mock_data_example-flexsys.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230314T164943Z&X-Amz-Expires=86400&X-Amz-Signature=c61f0fe02a714b982c83b5241f231719eba966960060b2a83d946f351077128e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data_example-flexsys.json%22&x-id=GetObject';

export const fetchData = async () => {
  const response = await axios.get<{ response: Data }>(url);
  const data = response.data.response;
  return data; // 데이터 반환
};
