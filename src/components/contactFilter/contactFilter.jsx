import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../redux/createSlice';

const ContactFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.contactReducerUppdate); 
  

  const handleFilterChange = (e) => {
    dispatch(updateFilter(e.target.value));
  }
  
    return (
        <div>
      <input
        type="text"
        placeholder="filter"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        
        id="filter"
        name="filter"
        onChange={handleFilterChange}
        value={filter}
        required
      />
      <label
        htmlFor="filter"
        
      >
        Filter:
      </label>
    </div>
    )
}

export default ContactFilter;

