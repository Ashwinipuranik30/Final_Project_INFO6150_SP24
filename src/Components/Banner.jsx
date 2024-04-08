import { Link } from 'react-router-dom';
import Home from '../Pages/home';

const Banner = () => {
  return ( 
  
  <>

  <div className="relative isolate flex items-center gap-x-6 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
     <p className="text-sm leading-6 text-gray-900">
       <strong className="font-semibold">Unlock exclusive offers and register for our unforgettable tours today</strong>
     </p>
    </div> 
    <div className="flex flex-1 justify-end">
    </div>
  </div>
    </>
  );
};
export default Banner;
