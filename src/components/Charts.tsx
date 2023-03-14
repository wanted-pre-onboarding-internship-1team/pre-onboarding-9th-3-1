import { HttpClient } from '../apis/HttpClient';
import React from 'react';

const fetch = new HttpClient();
fetch.getApi();

export default function Charts() {
  return <div>Charts</div>;
}
