import { MetricCard } from '@/components/features/MetricCard';
import { MetricSection } from '@/components/features/MetricSection';
import { AreaChart } from '@/components/features/charts/AreaChart';
import { BarChart } from '@/components/features/charts/BarChart';
import { PieChart } from '@/components/features/charts/PieChart';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Financial Performance Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
          <AreaChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Quarterly Performance</h3>
          <BarChart />
        </div>
      </div>

      <MetricSection title="Profitability Metrics">
        <MetricCard
          title="Gross Profit Margin"
          value={42.8}
          change={2.4}
          trend="up"
          format="number"
        />
        <MetricCard
          title="Net Profit Margin"
          value={15.2}
          change={-1.1}
          trend="down"
          format="number"
        />
        <MetricCard
          title="Operating Income"
          value={1250000}
          change={5.7}
          trend="up"
          format="currency"
        />
      </MetricSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Monthly Revenue Distribution</h3>
          <AreaChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Revenue by Product</h3>
          <PieChart />
        </div>
      </div>

      <MetricSection title="Growth Metrics">
        <MetricCard
          title="Revenue Growth"
          value={18.5}
          change={3.2}
          trend="up"
          format="number"
        />
        <MetricCard
          title="Customer Growth"
          value={12.3}
          change={1.5}
          trend="up"
          format="number"
        />
        <MetricCard
          title="Market Share"
          value={24.7}
          change={-0.8}
          trend="down"
          format="number"
        />
      </MetricSection>
    </div>
  );
}