import { MockAPI } from '../apis/MockAPI';
import React, { useEffect } from 'react';

export default function Mainpage() {
  useEffect(() => {
    const mock = new MockAPI();
    mock.fetchData().then(res => {
      const timestamps = Object.keys(res || {});
      console.log(timestamps);
    });
  }, []);

  return <div>Mainpage</div>;
}
