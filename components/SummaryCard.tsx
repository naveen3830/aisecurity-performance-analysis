
import React from 'react';

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center space-x-4 transition-all hover:bg-gray-50 hover:border-fortinet-blue">
      <div className="bg-fortinet-blue/10 p-3 rounded-full text-fortinet-blue">
        {icon}
      </div>
      <div>
        <p className="text-sm text-fortinet-medium-grey font-medium">{title}</p>
        <p className="text-2xl font-bold text-fortinet-extra-dark-grey">{value}</p>
      </div>
    </div>
  );
};

export default SummaryCard;