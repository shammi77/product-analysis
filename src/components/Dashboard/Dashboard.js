import React from 'react';
import {  Bar, BarChart, Legend, Line, LineChart,  Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
  const data= [
    {
        month: "Mar",
        investment: 100000,
        uv: 241,
        revenue: 10401
    },
    {
        month: "Apr",
        investment: 200000,
        uv: 423,
        revenue: 24500
    },
    {
        month: "May",
        investment: 500000,
        uv: 726,
        revenue: 67010
    },
    {
        month: "Jun",
        investment: 500000,
        uv: 529,
        revenue: 40405
    },
    {
        month: "Jul",
        investment: 600000,
        uv: 601,
        revenue: 50900
    },
    {
        month: "Aug",
        investment: 700000,
        uv: 670,
        revenue: 61000
    }
];


    return (
          <div>
              <h6>SimpleLineChart</h6>
              <div>
               <LineChart width={800} height={500} data={data}>
               <Line dataKey={'uv'} />
               <YAxis dataKey='investment'></YAxis>
               <XAxis dataKey='revenue'></XAxis>
               <Tooltip />
               <Legend verticalAlign="top" height={36}/>
           </LineChart>
          </div>
                <h6>Bar chart</h6>
           <div>
           <BarChart width={500} height={400} data={data}>
           <Bar dataKey="uv" fill="#8884d8" />
           <XAxis dataKey="revenue" />
           <Tooltip />
           <Legend verticalAlign="top" height={36}/>
           <YAxis dataKey="investment" />
           </BarChart>
           </div>
          </div>
        
    );
};

export default Dashboard;