// components/BotTable.js
import React from 'react';

const BotTable = ({ bots }) => {
  return (
    <div className="overflow-x-auto mt-4 text-white">
      <table className="min-w-full bg-neutral-900 border border-neutral-700 rounded-xl">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="py-2 px-4 text-left">#</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Lucro Hoje</th>
            <th className="py-2 px-4 text-left">Saldo Operacional</th>
          </tr>
        </thead>
        <tbody>
          {bots.map((bot, index) => (
            <tr key={index} className="border-t border-neutral-700 text-sm">
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{bot.status}</td>
              <td className="py-2 px-4">R$ {bot.lucro}</td>
              <td className="py-2 px-4">R$ {bot.saldo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BotTable;
