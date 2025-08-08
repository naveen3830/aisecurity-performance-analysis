import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { KeywordData } from '../types';

interface RankingChartProps {
  data: KeywordData[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-3 rounded-lg shadow-lg">
        <p className="text-sm font-bold text-fortinet-extra-dark-grey">{label}</p>
        <p className="text-xs text-fortinet-blue font-semibold">{`Rank: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const RankingChart: React.FC<RankingChartProps> = ({ data }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const chartData = data
    .filter(item => item.ranking.fortinet !== null)
    .map(item => ({
      name: item.keyword,
      rank: item.ranking.fortinet,
    }))
    .sort((a, b) => b.rank! - a.rank!);

  if (!isClient) {
    return <div className="w-full h-[700px] flex items-center justify-center text-fortinet-medium-grey">Loading Chart...</div>;
  }

  return (
    <div className="w-full h-[700px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{
            top: 5,
            right: 20,
            left: 290,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis type="number" stroke="#c8c8c8" domain={[0, 'dataMax + 5']} tick={{ fill: '#646464', fontSize: 12 }} />
          <YAxis 
            type="category" 
            dataKey="name" 
            stroke="#c8c8c8"
            width={280}
            tick={{ fill: '#646464', fontSize: 12 }}
            interval={0}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(48, 127, 226, 0.1)' }}/>
          <Legend wrapperStyle={{fontSize: "14px", color: '#464646', paddingTop: '20px'}}/>
          <Bar dataKey="rank" name="Fortinet Rank" fill="#307fe2" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RankingChart;