import React from 'react'
import './chart.scss'
import {
  AreaChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from 'recharts'

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chart">
      <h3 className="title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={7 / 1}>
        <AreaChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"></XAxis>
          <Area type="monotone" dataKey={dataKey} stroke="#5550bd"></Area>
          <Tooltip></Tooltip>
          {grid && (
            <CartesianGrid
              stroke="#e4e4e4"
              strokeDasharray="5 5"
            ></CartesianGrid>
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
