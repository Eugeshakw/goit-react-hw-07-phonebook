import React from 'react';
import Contactform from './components/contactForm/contactForm';
import Contactslist from './components/contactList/contactList';
import ContactFilter from './components/contactFilter/contactFilter';
export const App = () =>  {
    return (
      <>
        <h1 style={{ fontSize: '24px', color: 'blue', textAlign: 'center' }}>
          Phonebook
        </h1>
        <Contactform />
        <h2>Contacts</h2>
        <ContactFilter/>
        <Contactslist/>
      </>
    );
  
}

