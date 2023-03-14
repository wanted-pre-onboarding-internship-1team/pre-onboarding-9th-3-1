import { httpClient } from '../apis/HttpClient';
import { DataType } from '../types/DataType';
import React, { useEffect, useState } from 'react';

export default function useFetch() {
  const [dataValues, setDataValues] = useState<DataType>({});

  useEffect(() => {
    httpClient()
      .then(res => setDataValues(res.data.response))
      .catch(err => {
        if (err instanceof Error) throw err;
      });
  }, []);

  return dataValues;
}
