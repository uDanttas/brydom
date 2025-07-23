// components/BotPanel.js

import React from 'react';

const BotPanel = ({ bots, onActivateBot }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-bold mb-2">Seus Bots</h2>
      {bots.map((bot, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <span>Bot {index + 1}</span>
          <span>Status: {bot.ativo ? 'Ativo' : 'Inativo'}</span>
        </div>
      ))}
      <button
        onClick={onActivateBot}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Ativar novo Bot
      </button>
    </div>
  );
};

export default BotPanel;
