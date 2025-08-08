import React from 'react';

interface TrafficData {
  category: string;
  url: string;
  pageTitle: string;
  totalTraffic: number;
  trendLine: string;
}

interface TrafficTableProps {
  data: TrafficData[];
}

const HeaderCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <th scope="col" className={`p-3 text-sm font-black text-gray-700 uppercase tracking-wider text-left ${className}`}>
    {children}
  </th>
);

const DataCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <td className={`p-3 text-sm text-gray-700 ${className}`}>
    {children}
  </td>
);

const TrafficTable: React.FC<TrafficTableProps> = ({ data }) => {
  // Sort data by total traffic in descending order
  const sortedData = [...data].sort((a, b) => b.totalTraffic - a.totalTraffic);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <HeaderCell>Category</HeaderCell>
              <HeaderCell>URL</HeaderCell>
              <HeaderCell>Page Title</HeaderCell>
              <HeaderCell className="text-right">Total</HeaderCell>
              <HeaderCell className="text-center">Trend</HeaderCell>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <DataCell className="font-medium text-fortinet-extra-dark-grey">{item.category}</DataCell>
                <DataCell>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-fortinet-blue hover:text-fortinet-blue/80 hover:underline">
                    {item.url}
                  </a>
                </DataCell>
                <DataCell className="whitespace-normal">{item.pageTitle}</DataCell>
                <DataCell className="text-right font-medium whitespace-nowrap">{item.totalTraffic.toLocaleString('en-US')}</DataCell>
                <DataCell className="text-center whitespace-nowrap">{item.trendLine}</DataCell>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrafficTable; 