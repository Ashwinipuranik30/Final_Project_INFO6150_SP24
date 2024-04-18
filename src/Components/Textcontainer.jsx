import React from 'react';

const Textcontainer = ({ Title, Description, additionalContent}) => {
    return (
      <div className="bg-white" >
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-serif tracking-tight leading-none text-amber-400 md:text-5xl lg:text-6xl">
            {Title}
          </h1>
          <p className="mb-8 text-lg font-normal text-base lg:text-xl sm:px-16 lg:px-48">
          {Description}
          {additionalContent && ( 
            <span className="inline-block font-medium text-red-600 relative">
              {additionalContent}
            </span>
          )}
        </p>
        </div>
      </div>
    );
  };
  
 

export default Textcontainer;