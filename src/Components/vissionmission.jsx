import React from 'react';

const MissionVisionSection = ({ title, description }) => {
  return (
    
      <div>
        <h2 className="text-white text-3xl font-extrabold mb-2">{title}</h2>
        <p className="text-lg font-normal text-gray-100 dark:text-gray-400 mb-4">{description}</p>
      </div>
   
  );
};

export default MissionVisionSection;