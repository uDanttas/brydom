// components/GraphPanel.js
import React from 'react';

const GraphPanel = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md">
      <h2 className="text-xl font-bold mb-2 text-gray-700">Gráfico de Operações</h2>
      <div className="h-48 flex items-center justify-center text-gray-400">
        {/* Aqui pode ser adicionado um gráfico real futuramente */}
        <p>[ Gráfico ainda não implementado ]</p>
      </div>
    </div>
  );
};

export default GraphPanel;
