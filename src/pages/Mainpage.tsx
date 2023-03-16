import { getData } from '../apis/api';
import CombinedChart from '../common/CombinedChart';
import { Layout } from '../style/Layout.styled';
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

export default function Mainpage() {
  const [mockData, setMockData] = useState<Data>({});
  const [parsedData, setParsedData] = useState<ParsedData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setMockData(data);
      } catch (error) {}
    };
    fetchData();
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
}
