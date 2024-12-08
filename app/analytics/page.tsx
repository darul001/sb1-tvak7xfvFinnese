'use client';

import { MetricCard } from '@/components/features/MetricCard';
import { MetricSection } from '@/components/features/MetricSection';
import { AreaChart } from '@/components/features/charts/AreaChart';
import { BarChart } from '@/components/features/charts/BarChart';
import { PieChart } from '@/components/features/charts/PieChart';

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Performance Trends</h3>
          <AreaChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Revenue Distribution</h3>
          <PieChart />
        </div>
      </div>

      <MetricSection title="Performance Analytics">
        <MetricCard
          title="ROI"
          value={23.5}
          change={1.8}
          trend="up"
          format="number"
        />
        <MetricCard
          title="Customer Acquisition Cost"
          value={125}
          change={-5.2}
          trend="down"
          format="currency"
        />
        <MetricCard
          title="Customer Lifetime Value"
          value={2800}
          change={12.3}
          trend="up"
          format="currency"
        />
      </MetricSection>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Quarterly Performance Comparison</h3>
        <BarChart />
      </div>
    </div>
  );
}