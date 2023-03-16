import React from 'react';
import { useLocation } from 'react-router-dom';

export default function useParam(_param: string) {
  const { search } = useLocation();
  const param = new URLSearchParams(search).get(_param) || '';
  return param;
}
