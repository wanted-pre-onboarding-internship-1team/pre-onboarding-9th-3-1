import CombinedChart from '../common/CombinedChart';
import { Layout } from '../style/Layout.styled';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Data {
  [date: string]: {
    id: string;
    value_area: number;
    value_bar: number;
  };
}

interface ParsedData {
  date: string;
  id: string;
  value_area: number;
  value_bar: number;
}

const Mainpage = () => {
  const [mockData, setMockData] = useState<Data>({});
  const [parsedData, setParsedData] = useState<ParsedData[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/19736c70-c41c-4a4a-b45f-b866eebab626/mock_data_example-flexsys.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230315T184813Z&X-Amz-Expires=86400&X-Amz-Signature=ea321f977fdf015c5dadc6b1de8aa2a8943eaf6e5e2657cb7c34e5dcce0c540f&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data_example-flexsys.json%22&x-id=GetObject'
        );
        setMockData(response.data.response);
      } catch (error) {}
    };
    getData();
  }, []);

  useEffect(() => {
    const parsedData: ParsedData[] = [];

    for (const date in mockData) {
      if (Object.prototype.hasOwnProperty.call(mockData, date)) {
        const { id, value_area, value_bar } = mockData[date];
        parsedData.push({ date, id, value_area, value_bar });
      }
    }
    setParsedData(parsedData);
  }, [mockData]);

  return (
    <div>
      <Layout>
        <CombinedChart parsedData={parsedData} />
      </Layout>
    </div>
  );
};

export default Mainpage;
