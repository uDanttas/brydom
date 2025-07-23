// components/StatusCard.js
import React from 'react';

const StatusCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md flex items-center justify-between">
      <div>
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
      <div className="text-gray-400 text-3xl">
        {icon}
      </div>
    </div>
  );
};

export default StatusCard;
