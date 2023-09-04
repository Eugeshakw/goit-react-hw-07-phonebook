import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDeleteContacts } from '../redux/createSlice';

const Contactslist = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);
  console.log(contacts);
  // const isLoading = useSelector(state => state.contacts.isLoading);

  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(filter?.toLowerCase()) || 
      contact.number.includes(filter)
    );
  });

  const onDeleteContact = contactId => {
    dispatch(fetchDeleteContacts(contactId));
  };

  if (!contacts) {
    return <p>loading</p>
  }

  return (
    <>
      <ul>
        {filteredContacts.map(contactitem => {
          
          return (
            <li key={contactitem.id}>
              {contactitem.name} : {contactitem.number}
              <button onClick={() => onDeleteContact(contactitem.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Contactslist;
