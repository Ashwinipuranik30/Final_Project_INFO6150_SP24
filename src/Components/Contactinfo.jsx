import React from 'react';
import ContactContainer from './ContactContainer';

const Contactinfo = () => {
  return (
    <div >
     <ContactContainer
        heading="Contact"
        details={[
          'Mobile: +1 (123) 456-7890',
          <a key="email" href="mailto:connect@tripinn.com">Mail: connect@tripinn.com</a>
        ]}
      />
      <ContactContainer
        heading="Our Address"
        details={[
          '1230 Trip Tower',
          'Perimeter Drive',
          'New York, NY, 10001',
          'United States'
        ]}
      />
      <ContactContainer
        heading="Working hours"
        details={[
          'Monday - Friday: 08:00am - 5:00pm EST',
          'Saturday & Sunday: 08:00am - 12:00pm EST'
        ]}
      />
    </div>
  );
};

export default Contactinfo;