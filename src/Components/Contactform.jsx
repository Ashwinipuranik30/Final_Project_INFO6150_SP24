
import React, { useState } from 'react';
import Form from './form';

const fields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter your name',
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
    name: 'Message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Enter your message',
    required: true,
    
  },
];

const Contactform = () => {
    const handleSubmit = (formData) => {
      // Handle form submission (e.g., send data to server, show thank you message)
      window.alert('Thank you for contacting us!');
    };
  
    return (
      <div>
        <Form fields={fields} onSubmit={handleSubmit} />
      </div>
    );
  };

export default Contactform;