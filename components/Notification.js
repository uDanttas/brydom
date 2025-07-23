import React from 'react';

const Notification = ({ message, type = 'info' }) => {
  const color = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
  }[type];

  return (
    <div className={`fixed top-4 right-4 px-4 py-2 rounded-xl text-white shadow-xl ${color}`}>
      {message}
    </div>
  );
};

export default Notification;
