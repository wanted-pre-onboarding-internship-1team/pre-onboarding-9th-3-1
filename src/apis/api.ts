import axios from 'axios';
import React from 'react';

interface Data {
  [key: string]: {
    id: string;
    value_area: number;
    value_bar: number;
  };
}

const url =
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/19736c70-c41c-4a4a-b45f-b866eebab626/mock_data_example-flexsys.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230316T031055Z&X-Amz-Expires=86400&X-Amz-Signature=143540a3cecbca5c00c386b93cf9719ae87baf42694eaa9c20bfe464cdf367f2&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data_example-flexsys.json%22&x-id=GetObject';

export const getData = async () => {
  const response = await axios.get<{ response: Data }>(url);
  const data = response.data.response;
  return data; // 데이터 반환
};
