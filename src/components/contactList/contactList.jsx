import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {deleteContact} from '../redux/createSlice';


const Contactslist = () => {
const contacts = useSelector(state => state.contacts.contacts);


const dispatch = useDispatch();
const filter = useSelector(state => state.contactUppdate.filter);


const filteredContacts = contacts.filter(contact => {
  return (
    contact.name.toLowerCase().includes(filter.toLowerCase()) ||
    contact.number.includes(filter)
  );
});
  


const onDeleteContact = contactId  => {
dispatch(deleteContact(contactId));
}

  return (
    <>
      <ul>
        
        {filteredContacts.map(contactitem => {
          console.log(contactitem.id);
          return (
            <li key={contactitem.id}>
              {contactitem.name} : {contactitem.number}
              <button onClick={() => onDeleteContact(contactitem.id)} >Delete</button>

            </li>
          )
        })}
        
       
      </ul>
    </>
  );
};

export default Contactslist;


