import React from "react";
import "./chart.scss";
import { AreaChart, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className='chart'>
      <h3 className='title'>{title}</h3>
      <ResponsiveContainer width='100%' aspect={7 / 1}>
        <AreaChart
          width={400}
          height={400}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          data={data}
        >
          <XAxis dataKey='name' stroke='#5550bd'></XAxis>
          <Area type='monotone' dataKey={dataKey} stroke='#5550bd'></Area>
          <Tooltip></Tooltip>
          {grid && <CartesianGrid stroke='#999999' strokeDasharray='5 5'></CartesianGrid>}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
