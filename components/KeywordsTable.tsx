
import React from 'react';
import { KeywordData } from '../types';
import { CheckIcon, XMarkIcon, LinkIcon } from './Icons';

interface KeywordsTableProps {
  data: KeywordData[];
}

const getRankingClass = (rank: number | null): string => {
  if (rank === null) return 'bg-gray-100 text-gray-500';
  if (rank >= 1 && rank <= 3) return 'bg-fortinet-green/10 text-fortinet-green';
  if (rank >= 4 && rank <= 10) return 'bg-fortinet-yellow/10 text-fortinet-yellow';
  return 'bg-fortinet-red/10 text-fortinet-red';
};

const HeaderCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <th scope="col" className={`p-3 text-sm font-medium text-gray-500 uppercase tracking-wider text-left ${className}`}>
    {children}
  </th>
);

const DataCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <td className={`whitespace-nowrap p-3 text-sm text-gray-700 ${className}`}>
    {children}
  </td>
);

const KeywordsTable: React.FC<KeywordsTableProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <HeaderCell>Keyword</HeaderCell>
              <HeaderCell className="text-right">US MSV</HeaderCell>
              <HeaderCell className="text-right">Global MSV</HeaderCell>
              <HeaderCell className="text-center">KD</HeaderCell>
              <HeaderCell>Intent</HeaderCell>
              <HeaderCell className="text-center">Fortinet Rank</HeaderCell>
              <HeaderCell className="text-center">AI Overview</HeaderCell>
              <HeaderCell className="text-center">Fortinet in AIO</HeaderCell>
              <HeaderCell>SERP #1</HeaderCell>
              <HeaderCell>Fortinet URL</HeaderCell>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.keyword} className="hover:bg-gray-50 transition-colors">
                <DataCell className="font-medium text-fortinet-extra-dark-grey">{item.keyword}</DataCell>
                <DataCell className="text-right">{item.usMsv.toLocaleString('en-US')}</DataCell>
                <DataCell className="text-right">{item.globalMsv.toLocaleString('en-US')}</DataCell>
                <DataCell className="text-center">{item.kd}</DataCell>
                <DataCell>{item.intent}</DataCell>
                <DataCell className="text-center">
                   <span className={`px-2 py-1 rounded-md text-xs font-bold ${getRankingClass(item.ranking.fortinet)}`}>
                       {item.ranking.fortinet ?? 'N/A'}
                   </span>
                </DataCell>
                <DataCell className="text-center">
                    {item.aiOverview ? <CheckIcon className="text-fortinet-green mx-auto" /> : <XMarkIcon className="text-fortinet-red mx-auto" />}
                </DataCell>
                 <DataCell className="text-center">
                   <span className={`px-2 py-1 rounded-md text-xs font-bold ${getRankingClass(item.fortinetInAiOverviewPosition)}`}>
                       {item.fortinetInAiOverviewPosition ?? 'N/A'}
                   </span>
                </DataCell>
                <DataCell>{item.serpPosition1}</DataCell>
                <DataCell>
                  {item.fortinetUrlOrganic && (
                    <a href={item.fortinetUrlOrganic} target="_blank" rel="noopener noreferrer" className="flex items-center text-fortinet-blue hover:text-fortinet-blue/80 hover:underline">
                      <LinkIcon />
                      <span className="ml-1.5">Organic Link</span>
                    </a>
                  )}
                </DataCell>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KeywordsTable;