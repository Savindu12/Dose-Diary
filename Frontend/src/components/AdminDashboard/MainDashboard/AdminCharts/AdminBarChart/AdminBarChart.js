import React, { PureComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Sitaglipitin',
      uv: 400,
      pv: 240,
      amt: 240,
    },
    {
      name: 'Candid B',
      uv: 300,
      pv: 139,
      amt: 221,
    },
    {
      name: 'Vitamin C',
      uv: 200,
      pv: 980,
      amt: 229,
    },
    {
      name: 'Rosuvatasnin',
      uv: 278,
      pv: 390,
      amt: 200,
    },
    {
      name: 'Refresh Tears',
      uv: 189,
      pv: 480,
      amt: 218,
    },
    {
      name: 'Vitamin E',
      uv: 239,
      pv: 380,
      amt: 250,
    },
    {
      name: 'Vitamin 32',
      uv: 349,
      pv: 430,
      amt: 210,
    },
  ];

  export default class AdminBarChart extends PureComponent {
  
    render() {
      return (
        // <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={800}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        // </ResponsiveContainer>
      );
    }
  }