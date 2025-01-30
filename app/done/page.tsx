import React from 'react';

const Done = () => {
  return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Спасибо!</strong>
          <span className="block sm:inline"> Ваша заявка успешно отправлена.</span>
        </div>
      </div>
  );
};

export default Done;