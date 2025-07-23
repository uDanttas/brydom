// components/ProfitBox.js
import React from 'react';

const ProfitBox = ({ lucroHoje }) => {
  return (
    <div className="bg-green-800 text-white rounded-2xl p-4 shadow-lg w-full text-center">
      <h3 className="text-lg font-semibold">Lucro Hoje</h3>
      <p className="text-2xl font-bold mt-2">R$ {lucroHoje.toFixed(2)}</p>
    </div>
  );
};

export default ProfitBox;
