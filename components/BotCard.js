import React from 'react';

const BotCard = ({ bot, onClick }) => {
  return (
    <div
      className="bg-zinc-900 text-white p-4 rounded-xl cursor-pointer hover:bg-zinc-800 transition-all"
      onClick={() => onClick(bot)}
    >
      <h3 className="text-lg font-semibold">Bot #{bot.id}</h3>
      <p className="text-sm text-green-400">Lucro: R${bot.lucro.toFixed(2)}</p>
      <p className="text-sm">Status: {bot.ativo ? 'Ativo' : 'Inativo'}</p>
    </div>
  );
};

export default BotCard;
