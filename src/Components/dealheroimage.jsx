import React from 'react';
import Buttons from './Buttons';
const SummerSaleSection = () => {
  return (
    <section className="px-3 py-5 bg-neutral-100 lg:py-5">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold md:text-7xl text-amber-500">25% OFF</p>
          <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
          <p className="mt-2 my-4 text-sm md:text-lg">For limited time only!</p>
          <p>
          <Buttons href="/registration" color="text-white bg-gray-900 hover:bg-gray-700">
            Register Now 
          </Buttons>
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src="\src\assets\images\Heroimage_deal.jpg" alt="In the beach" />
        </div>
      </div>
    </section>
  );
};

export default SummerSaleSection;
