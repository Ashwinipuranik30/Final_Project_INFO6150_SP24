
import React, { useState } from 'react';
import Form from '../Components/form';

const fields = [
  {
    name: 'first-name',
    label: 'First Name',
    type: 'text',
    placeholder: 'Enter your first name',
    required: true,
  },
  {
    name: 'last-name',
    label: 'Last Name',
    type: 'text',
    placeholder: 'Enter your last name',
    required: true,
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email address',
    required: true,
  },
  {
    name: 'phone-number',
    label: 'Phone Number',
    type: 'text',
    placeholder: 'Enter your phone number',
    required: true,
  },
  {
    name: 'country',
    label: 'Country',
    type: 'select',
    options: ['United States', 'Canada', 'Mexico', 'Other'],
    placeholder: 'Select your country',
    required: true,
  },
  {
    name: 'address',
    label: 'Address',
    type: 'textarea',
    placeholder: 'Enter your address',
    required: false,
  },
  {
    name: 'tour-package',
    label: 'Tour Package',
    type: 'select',
    options: [
      'The Best of Italy',
      'Sunny Spain',
      'Chic France',
      'Vibrant India',
      'Maldives Serenity Retreat',
      'Thai Tropical Adventure',
      'Miami Escape',
      'Vegas Thrills',
      'NYC Discovery',
    ],
    placeholder: 'Select a tour package',
    required: true,
  },
];

const Registration = () => {
    const [submittedData, setSubmittedData] = useState(null);
    const [formData, setFormData] = useState({});
  
    const handleSubmit = (formData) => {
      // Handle form submission
      setSubmittedData(formData);
      setFormData({}); // Reset form data
    };

    

  return (
    <>
    <div className="mx-auto max-w-2xl p-16">
      <h2 className="text-3xl font-serif tracking-tight text-amber-400 sm:text-4xl text-center">RESERVATION FORM</h2>
      <Form fields={fields} onSubmit={handleSubmit} />
    </div>

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h3 className="text-3xl font-serif text-center">Our team will contact you once you register the tour!! Hurry Up and start your dream vacation!!</h3>
        <div id="display-data" className="mt-6 p-4 bg-gray-200 border rounded-lg text-gray-800 hidden" style={{ display: "none" }}></div>
      </div>


      {submittedData && (
        
          
          <div className="mt-6 p-4 bg-gray-200 border rounded-lg text-gray-800">
            <h2 className="text-xl font-semibold mb-2">Submitted Data:</h2>
            {Object.keys(submittedData).map((key) => (
              <p key={key}><strong>{key}:</strong> {submittedData[key]}</p>
            ))}
          </div>
       
      )}

    </>
    
  );
};

export default Registration;