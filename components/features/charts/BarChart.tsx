'use client';

import { Bar, BarChart as RechartsBar, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Q1', value: 4000 },
  { name: 'Q2', value: 3000 },
  { name: 'Q3', value: 2000 },
  { name: 'Q4', value: 2780 },
];

interface CustomXAxisProps {
  allowDecimals?: boolean;
  hide?: boolean;
}

interface CustomYAxisProps {
  allowDecimals?: boolean;
  hide?: boolean;
}

function CustomXAxis({ allowDecimals = false, hide = false }: CustomXAxisProps) {
  return <XAxis dataKey="name" allowDecimals={allowDecimals} hide={hide} />;
}

function CustomYAxis({ allowDecimals = true, hide = false }: CustomYAxisProps) {
  return <YAxis allowDecimals={allowDecimals} hide={hide} />;
}

export function BarChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBar data={data}>
          <CustomXAxis />
          <CustomYAxis />
          <Tooltip />
          <Bar dataKey="value" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
        </RechartsBar>
      </ResponsiveContainer>
    </div>
  );
}