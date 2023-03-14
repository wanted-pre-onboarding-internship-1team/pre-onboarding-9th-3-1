import { MockAPI } from '../apis/MockAPI';
import { RepositoryImpl } from '../apis/RepositoryImpl';
import { Chart } from '../common/Chart';
import React, { useEffect } from 'react';

const Mainpage = () => {
  const mock = new MockAPI();
  const repo = new RepositoryImpl(mock);

  return (
    <div>
      Mainpage
      <Chart />
    </div>
  );
};

export default Mainpage;
