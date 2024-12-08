interface MetricSectionProps {
  title: string;
  children: React.ReactNode;
}

export function MetricSection({ title, children }: MetricSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
}