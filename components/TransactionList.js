import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div className="bg-neutral-900 p-4 rounded-xl text-white shadow-lg">
      <h3 className="text-lg font-bold mb-2">Histórico de Operações</h3>
      <ul className="space-y-1 max-h-52 overflow-y-auto">
        {transactions.length === 0 && <li>Nenhuma operação registrada.</li>}
        {transactions.map((tx, index) => (
          <li key={index} className="text-sm border-b border-neutral-700 pb-1">
            {tx}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
