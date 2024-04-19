import React from 'react';

const Itinerary = ({ days }) => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 ">
      {days.map((day, index) => (
        <div key={index} className="bg-gray-100 p-5 mb-10">
          <h1 className="font-bold text-2xl mb-2">{day.title}</h1>
          <p className="my-3">{day.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Itinerary;
