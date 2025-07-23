// components/ActivateBotButton.js
import React from 'react';

const ActivateBotButton = ({ onAtivar }) => {
  return (
    <button
      onClick={onAtivar}
      className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-2xl shadow-lg w-full transition"
    >
      Ativar Novo Bot
    </button>
  );
};

export default ActivateBotButton;
