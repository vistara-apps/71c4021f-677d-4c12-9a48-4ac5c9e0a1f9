'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', value: 105000 },
  { month: 'Feb', value: 115000 },
  { month: 'Mar', value: 125000 },
  { month: 'Apr', value: 135000 },
  { month: 'May', value: 155000 },
  { month: 'Jun', value: 175000 },
  { month: 'Jul', value: 185000 },
  { month: 'Aug', value: 195000 },
  { month: 'Sep', value: 205000 },
];

export function PortfolioChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 20%)" />
          <XAxis 
            dataKey="month" 
            stroke="hsl(220 15% 65%)"
            fontSize={12}
          />
          <YAxis 
            stroke="hsl(220 15% 65%)"
            fontSize={12}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="hsl(220 100% 50%)" 
            strokeWidth={2}
            dot={{ fill: 'hsl(220 100% 50%)', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: 'hsl(220 100% 50%)', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
