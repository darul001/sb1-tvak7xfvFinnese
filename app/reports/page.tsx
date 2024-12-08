'use client';

import { FileText, Download } from 'lucide-react';

const reports = [
  { id: 1, name: 'Q2 2024 Financial Report', date: '2024-06-30', type: 'Quarterly' },
  { id: 2, name: 'Q1 2024 Financial Report', date: '2024-03-31', type: 'Quarterly' },
  { id: 3, name: 'Annual Report 2023', date: '2023-12-31', type: 'Annual' },
];

export default function ReportsPage() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reports.map((report) => (
            <div
              key={report.id}
              className="border rounded-lg p-4 hover:border-blue-500 transition-colors group"
            >
              <div className="flex items-start justify-between">
                <FileText className="h-8 w-8 text-blue-500" />
                <button className="text-gray-400 hover:text-blue-500">
                  <Download className="h-5 w-5" />
                </button>
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{report.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{report.type}</p>
              <time className="text-sm text-gray-400 mt-2 block">
                {new Date(report.date).toLocaleDateString()}
              </time>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}