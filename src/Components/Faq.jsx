import React from 'react';
import Faqsection from './Faqsection';

const Faq = () => {
  return (
    <div className="bg-white max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <h2 className="text-4xl leading-9 font-serif text-amber-400 text-center mb-8">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
        <Faqsection
          question="How to cancel my trip?"
          answer="To cancel your trip, please contact us by email at connect@tripinn.com with your travel id number and the names of all guests that need to cancel. We will need to confirm your identity before we complete the cancellation."
        />

        <Faqsection
          question="Can I customize my trip?"
          answer="Unfortunately, we do not offer customized trip options at this time. Our travel packages are carefully curated to provide exceptional experiences while ensuring convenience and value for our customers."
        />
        <Faqsection
          question="Is travel insurance included in the tour package?"
          answer="Travel insurance is not typically included in our tour packages. We recommend purchasing travel insurance separately to ensure coverage for any unforeseen circumstances."
        />
        <Faqsection
          question="How to reach customer support during my trip?"
          answer="Our customer support will be availbale to assist you 24/7. You will be provided with emergency contacts and customer support details upon booking the tour."
        />

        <Faqsection
          question="What are the payment options?"
          answer="We accept various payment methods, including credit/debit cards, bank transfers, and online payment platforms. Our secure payment gateway ensures that your financial information is protected."
        />
        <Faqsection
          question="In case of any unexpected changes/emergencies during tour?"
          answer="In case of unexpected changes, please contact our dedicated customer support team immediately. We're here to assist you 24/7 and provide guidance on any necessary changes to ensure a smooth and stress-free experience."
        />
      </div>
    </div>
  );
};

export default Faq;
