import Contactform from '../Components/Contactform'
import Contactinfo from '../Components/Contactinfo';

import ContactContainer from '../Components/Contactinfo';
const Contactus = () => {
    return (
      <div className ="bg-white" id="contact">
      <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h1 className ="mb-4 text-3xl font-serif tracking-tight leading-none text-amber-400 md:text-5xl lg:text-6xl ">Contact Us</h1>
      </div>
      <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
            <h2 className ="text-2xl  text-gray-900 mb-4">
              How can we help you
            </h2>
        <Contactform/>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <Contactinfo/>
        </div>
        </div>
        
      </div>
      
    );
  };
  
  export default Contactus;