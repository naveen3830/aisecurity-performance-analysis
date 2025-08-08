import React, { useMemo } from 'react';
import { keywordData } from '../data/keywords';
import KeywordsTable from './KeywordsTable';
import SummaryCard from './SummaryCard';
import { CheckCircleIcon, ArrowTrendingUpIcon } from './Icons';

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
          Source: SEMrush
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <SummaryCard title="Total Keywords" value={summary.totalKeywords} icon={<ArrowTrendingUpIcon />} />
        <SummaryCard title="Fortinet Keywords in Top 3 Rank" value={`${summary.fortinetTop3Count} / ${summary.totalKeywords}`} icon={<ArrowTrendingUpIcon />} />
        <SummaryCard title="Fortinet Keywords in AI Overview" value={`${summary.fortinetInAioCount} / ${summary.totalKeywords}`} icon={<CheckCircleIcon />} />
      </section>

      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-fortinet-extra-dark-grey mb-2">Keyword Performance</h2>
          <p className="text-fortinet-medium-grey">Detailed analysis of keyword rankings and performance metrics</p>
        </div>
        <KeywordsTable data={keywordData} />
      </section>
    </div>
  );
};

export default Dashboard;