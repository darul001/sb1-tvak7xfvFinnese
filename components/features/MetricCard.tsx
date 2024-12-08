import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down';
  format?: string;
}

export function MetricCard({ title, value, change, trend, format = 'number' }: MetricCardProps) {
  const formattedValue = format === 'currency' 
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(value))
    : value;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{formattedValue}</p>
        <span
          className={cn(
            'ml-2 text-sm font-medium flex items-center',
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          )}
        >
          {trend === 'up' ? (
            <ArrowUpIcon className="h-4 w-4 mr-0.5" />
          ) : (
            <ArrowDownIcon className="h-4 w-4 mr-0.5" />
          )}
          {Math.abs(change)}%
        </span>
      </div>
    </div>
  );
}