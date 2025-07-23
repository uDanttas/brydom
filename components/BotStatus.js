import React from 'react';

const BotStatus = ({ status }) => {
  return (
    <div className={`rounded-xl px-4 py-2 text-white ${status === 'ativo' ? 'bg-green-600' : 'bg-gray-500'}`}>
      {status === 'ativo' ? 'Bot Ativo' : 'Bot Inativo'}
    </div>
  );
};

export default BotStatus;
