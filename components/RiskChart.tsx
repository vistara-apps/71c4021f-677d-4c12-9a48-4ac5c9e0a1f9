'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { category: 'Low Risk', value: 25, color: '#10B981' },
  { category: 'Medium Risk', value: 45, color: '#F59E0B' },
  { category: 'High Risk', value: 30, color: '#EF4444' },
];

export function RiskChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 20%)" />
          <XAxis 
            dataKey="category" 
            stroke="hsl(220 15% 65%)"
            fontSize={12}
          />
          <YAxis 
            stroke="hsl(220 15% 65%)"
            fontSize={12}
            tickFormatter={(value) => `${value}%`}
          />
          <Bar 
            dataKey="value" 
            fill="hsl(220 100% 50%)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
