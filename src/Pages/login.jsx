import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Components/form';

const fields = [
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email address',
    required: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password', 
    placeholder: 'Enter your password',
    required: true,
  },
];

const Login = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (formData) => {
    setSubmittedData(formData);
    alert('Thank you for Login!'); // Show alert on form submission
  };

  return (
    <div className="mx-auto max-w-2xl p-16">
      <h2 className="text-3xl font-serif tracking-tight text-amber-400 sm:text-4xl text-center">Login to your account</h2>
      <Form fields={fields} onSubmit={handleSubmit} />
          
    </div>
  );
};

export default Login;