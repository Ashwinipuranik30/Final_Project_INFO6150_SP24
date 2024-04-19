import React from 'react';

const DestinationIntro =({ title, duration, description }) => {
    return (
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="lg:col-span-2 ">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">{title}</h2>
              <p className="text-gray-600 text-sm mb-4">{duration}</p>
              <div>
                <p className="font-base text-gray-700">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DestinationIntro;
  