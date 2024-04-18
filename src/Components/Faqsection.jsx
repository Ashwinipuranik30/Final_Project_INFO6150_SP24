import React from 'react';

const Faqsection = ({ question, answer }) => {
  return (
    <dl className="mb-8">
      <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">{question}</dt>
      <dd className="mt-4">
      <p lassName="leading-6 text-base text-gray-500">
        {answer}</p></dd>
    </dl>
  );
};
export default Faqsection;