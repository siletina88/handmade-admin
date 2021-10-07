import React from 'react'
import './chart.scss'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chart">
      <h3 className="title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={7 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"></XAxis>
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd"></Line>
          <Tooltip></Tooltip>
          {grid && (
            <CartesianGrid
              stroke="#e4e4e4"
              strokeDasharray="5 5"
            ></CartesianGrid>
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
