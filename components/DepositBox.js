import React from 'react';

const DepositBox = ({ amount, onDeposit }) => {
  return (
    <div className="bg-zinc-900 p-4 rounded-xl text-white space-y-2">
      <h3 className="text-lg font-bold">Depósito</h3>
      <input
        type="number"
        placeholder="Valor em R$"
        value={amount}
        onChange={(e) => onDeposit(Number(e.target.value))}
        className="w-full p-2 rounded bg-zinc-800 text-white"
      />
    </div>
  );
};

export default DepositBox;
