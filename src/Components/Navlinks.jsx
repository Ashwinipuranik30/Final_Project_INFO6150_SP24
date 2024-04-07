import { Link } from 'react-router-dom';


const Navlinks = () => {
  return (
    
      <div className="hidden md:flex md:w-auto md:order-1">
       
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0">Destinations
            </li>
            <li>
            <Link to="/deals" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0">Deals</Link>
            </li>
            <li>
            <Link to="/contactus" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0">Contact Us</Link>
            </li>
            <li>
              <Link to ="/aboutus" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0">About Us</Link>
            </li>
           
          </ul>
          
       
       
     
      </div>
   

  );
};

export default Navlinks;
