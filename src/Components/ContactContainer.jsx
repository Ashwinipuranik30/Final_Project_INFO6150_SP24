import React from 'react';

const ContactContainer = ({ heading, details }) => {
    return (
      <>
        <h3 className="mb-2 text-lg font-medium leading-6 text-base">{heading}</h3>
        <ul className="mb-4">
          {details.map((detail, index) => (
            <li key={index} className=" text-sm text-gray-600 dark:text-slate-500 mb-2">
              {detail}
            </li>
          ))}
        </ul>
      </>
    );
  };

export default ContactContainer;