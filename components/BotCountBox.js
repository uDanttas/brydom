// components/BotCountBox.js
import React from 'react';

const BotCountBox = ({ botsAtivos }) => {
  return (
    <div className="bg-blue-900 text-white rounded-2xl p-4 shadow-lg w-full text-center">
      <h3 className="text-lg font-semibold">Bots Ativados</h3>
      <p className="text-2xl font-bold mt-2">{botsAtivos}</p>
    </div>
  );
};

export default BotCountBox;
