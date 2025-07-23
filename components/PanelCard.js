import React from 'react';

const PanelCard = ({ title, value, bg = 'bg-zinc-800' }) => {
  return (
    <div className={`${bg} text-white rounded-2xl p-4 shadow-md`}>
      <h4 className="text-sm text-neutral-400">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default PanelCard;
