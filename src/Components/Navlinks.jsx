import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Buttons from './Buttons';


const Navlinks = () => {


  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <div className="hidden md:flex md:w-auto md:order-1">
       
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li className="nav-link" key="destinations">
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 "
            onClick={toggleDropdown}
          >
            Destinations
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          {/* Dropdown menu for Destinations */}
          {showDropdown && (
            <div id="dropdownNavbar" className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownNavbarLink">
                <li>
                  <Link to="/destination/europe" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={toggleDropdown}>Europe</Link>
                </li>
                <li>
                  <Link to="/destination/asia" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={toggleDropdown}>Asia</Link>
                </li>
              </ul>
            </div>
          )}
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
          <div className = "flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Buttons href="/login" color="text-teal-500 bg-white hover:bg-teal-50">
                LOGIN
              </Buttons>
          </div>
    </>

  );
};

export default Navlinks;
