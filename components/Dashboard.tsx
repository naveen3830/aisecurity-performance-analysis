import React, { useMemo } from 'react';
import { keywordData } from '../data/keywords';
import KeywordsTable from './KeywordsTable';
import SummaryCard from './SummaryCard';
import RankingChart from './RankingChart';
import { CheckCircleIcon, ChartPieIcon, ArrowTrendingUpIcon } from './Icons';

const Dashboard: React.FC = () => {
  const summary = useMemo(() => {
    const fortinetInAioCount = keywordData.filter(item => item.fortinetInAiOverviewPosition !== null).length;
    const fortinetTop3Count = keywordData.filter(item => item.ranking.fortinet !== null && item.ranking.fortinet <= 3).length;

    return {
      fortinetInAioCount,
      fortinetTop3Count,
      totalKeywords: keywordData.length
    };
  }, []);

  return (
    <div className="p-6 sm:p-8 lg:p-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-fortinet-extra-dark-grey tracking-tight mb-3">
          AI Security - Performance Analysis
        </h1>
        <p className="text-lg text-fortinet-medium-grey">
          Source: SEMrush & Google Live Search | US VPN
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        <SummaryCard title="Fortinet Top 3 Ranks" value={`${summary.fortinetTop3Count} / ${summary.totalKeywords}`} icon={<ArrowTrendingUpIcon />} />
        <SummaryCard title="Fortinet in AI Overview" value={`${summary.fortinetInAioCount} / ${summary.totalKeywords}`} icon={<CheckCircleIcon />} />
      </section>

      <section className="mb-12">
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-semibold text-fortinet-extra-dark-grey mb-6 flex items-center">
            <ChartPieIcon />
            <span className="ml-3">Fortinet Organic Ranking Position</span>
          </h2>
          <RankingChart data={keywordData} />
        </div>
      </section>

      <section>
        <KeywordsTable data={keywordData} />
      </section>
    </div>
  );
};

export default Dashboard;