'use client';

import { Cell, Pie, PieChart as RechartsPie, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Product A', value: 400 },
  { name: 'Product B', value: 300 },
  { name: 'Product C', value: 300 },
  { name: 'Product D', value: 200 },
];

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

interface CustomPieProps {
  data: Array<{ name: string; value: number }>;
  dataKey?: string;
  innerRadius?: number;
  outerRadius?: number;
  paddingAngle?: number;
}

function CustomPie({ 
  data, 
  dataKey = 'value',
  innerRadius = 60,
  outerRadius = 80,
  paddingAngle = 5
}: CustomPieProps) {
  return (
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      paddingAngle={paddingAngle}
      dataKey={dataKey}
    >
      {data.map((_, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  );
}

export function PieChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPie>
          <CustomPie data={data} />
          <Tooltip />
        </RechartsPie>
      </ResponsiveContainer>
    </div>
  );
}