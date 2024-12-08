'use client';

import { Area, AreaChart as RechartsArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { month: 'Jan', value: 4000 },
  { month: 'Feb', value: 3000 },
  { month: 'Mar', value: 2000 },
  { month: 'Apr', value: 2780 },
  { month: 'May', value: 1890 },
  { month: 'Jun', value: 2390 },
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
  return <XAxis dataKey="month" allowDecimals={allowDecimals} hide={hide} />;
}

function CustomYAxis({ allowDecimals = true, hide = false }: CustomYAxisProps) {
  return <YAxis allowDecimals={allowDecimals} hide={hide} />;
}

export function AreaChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsArea data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CustomXAxis />
          <CustomYAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--chart-1))"
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </RechartsArea>
      </ResponsiveContainer>
    </div>
  );
}