import React from 'react';
import ApexCharts from 'react-apexcharts';

export default function Mainpage() {
  
  return (
    <div>
      <ApexCharts series = {
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            } />
    </div>
  );
}
