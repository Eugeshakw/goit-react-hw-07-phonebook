import React from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {deleteContact} from '../redux/createSlice';

import {fetchContacts} from '../redux/createSlice'

const Contactslist = () => {
const contacts = useSelector(state => state.contacts.contacts.items);
console.log(contacts);
const isLoading = useSelector(state => state.contacts.isLoading);




const dispatch = useDispatch();
const filter = useSelector(state => state.filter);


// const filteredContacts = contacts.filter(contact => {
//   return (
//     contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//     contact.number.includes(filter)
//   );
// });
  
useEffect(() => {
  dispatch(fetchContacts)
}, [dispatch])


const onDeleteContact = contactId  => {
dispatch(deleteContact(contactId));
}

if (!isLoading) {
  return <p>Loading...</p>; 
}

  return (
    <>
      <ul>
        
        {contacts.map(contactitem => {
          console.log(contactitem.id);
          return (
            <li key={contactitem.id}>
              
              {contactitem.name} : {contactitem.phone}
              <button onClick={() => onDeleteContact(contactitem.id)} >Delete</button>

            </li>
          )
        })}
        
       
      </ul>
    </>
  );
};

export default Contactslist;


