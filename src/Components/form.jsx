import React, { useState } from 'react';

const Form = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({}); // Reset form data
  };



  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl">
      {fields.map((field) => (
        <div key={field.name} className="mb-8">
          <label htmlFor={field.name} className="block text-sm font-semibold text-gray-900">
            {field.label}
          </label>
          {field.type === 'select' ? (
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required={field.required}
            >
              <option value="" disabled>Select {field.label}</option>
              {field.options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder={field.placeholder}
              required={field.required}
            ></textarea>
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder={field.placeholder}
              required={field.required}
            />
          )}
        </div>
      ))}
      <button type="submit"  className="block w-full mt-6 rounded-md bg-teal-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500"  >
        Submit
      </button>
    </form>
  );
};

export default Form;