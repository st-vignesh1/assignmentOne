import PropTypes from 'prop-types';
import React from 'react'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function BarGraph({data}) {
    return (
        <div className="w-full h-100">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 60, bottom: 40 }} 
            >
              <XAxis dataKey="fiscalDateEnding" />
              <YAxis dataKey="totalRevenue" />
              <Tooltip />
              <Legend />

              <Bar dataKey="totalRevenue" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
}

BarChart.propTypes={
data:PropTypes.arrayOf(PropTypes.object)
}