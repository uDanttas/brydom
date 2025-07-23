// components/ProfitCard.js
import React from 'react';

const ProfitCard = ({ label, value }) => {
  return (
    <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-4 shadow-md text-white">
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-xl font-bold mt-1">R$ {value}</div>
    </div>
  );
};

export default ProfitCard;
