// components/MetaAlerta.js
import React from 'react';

const MetaAlerta = ({ metaAtingida }) => {
  if (!metaAtingida) return null;

  return (
    <div className="bg-purple-800 text-white p-3 rounded-2xl shadow-md text-center">
      🎯 Meta diária atingida!
    </div>
  );
};

export default MetaAlerta;
