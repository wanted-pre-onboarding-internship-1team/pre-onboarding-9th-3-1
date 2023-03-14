import { DataContext } from '../..//contexts/DataProvider';
import React, { useContext } from 'react';

export default function Chart() {
  const data = useContext(DataContext);
  console.log('chart', data);
  return <div>Chart</div>;
}
