import React from 'react';

import style from './contactform.module.scss';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {createContact} from '../redux/createSlice'

const Contactform = () => {
  
 const dispatch = useDispatch()
 
 const contacts = useSelector(state => state.contacts.contacts)
 
 console.log(contacts);
    const onSubmitFrom = (e) => {
      e.preventDefault();
      const number = e.target.number.value;
      const name = e.target.name.value;
      
      if (number === ''){
        alert('Please enter a number');
          return
      } else if (contacts.some(
        contact => 
        contact.number.toLowerCase() === number.toLowerCase() || 
        contact.name.toLowerCase() === name.toLowerCase())){
          alert(`${name} or entered number is already in contacts.`);
          return;
        }
        
      e.target.reset();
      dispatch(createContact({ name, number, id: nanoid() }));
     
    } 

  return (
    <>
      <form className={style.formContainer} onSubmit={onSubmitFrom} >
        <label className={style.labName} htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          className={style.inpName}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="name"
          
          
        />

        <label className={style.labNumber} htmlFor="number">
          Number
        </label>
        <input
          type="tel"
          name="number"
          placeholder="Number"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={style.inpNumber}
          id="number"
        />

        <button type="submit" className={style.btnSubmit}>
          add contact
        </button>
      </form>
    </>
  );
};
export default Contactform;


