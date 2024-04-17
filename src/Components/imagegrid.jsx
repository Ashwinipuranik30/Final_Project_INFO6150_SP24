import React from 'react';

const ImageGrid = ({ images, heading }) => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 ">
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h2 className="mr-10 text-3xl font-bold leading-none md:text-5xl text-amber-400">{heading}</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index}>
            <img className="h-auto max-w-full rounded-lg" src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
