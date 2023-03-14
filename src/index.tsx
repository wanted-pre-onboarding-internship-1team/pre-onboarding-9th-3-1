import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import DataService from './services/dataService';
import HttpClient from './utils/httpClient';
import { DataProvider } from './contexts/DataProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const httpClient = new HttpClient(
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/19736c70-c41c-4a4a-b45f-b866eebab626/mock_data_example-flexsys.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45/20230313/us-west-2/s3/aws4_request&X-Amz-Date=20230313T162414Z&X-Amz-Expires=86400&X-Amz-Signature=c8d4f172e7b31d5b376152e9730c84efb0e77230704acd241e4279e26ebe68dc&X-Amz-SignedHeaders=host&response-content-disposition=filename="mock_data_example-flexsys.json"&x-id=GetObject'
);
const dataService = new DataService(httpClient);
root.render(
  <DataProvider dataService={dataService}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>
);
