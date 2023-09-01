import { createSlice } from "@reduxjs/toolkit";

const initialState = {contacts: [], filter: ''}

const contactsSlice = createSlice({

  name: 'contacts',
  initialState,
  reducers: {
    
      createContact: (state, action) => {
      state.contacts.push(action.payload)
      
    },
    deleteContact: 
    (state, action) => {
    state.contacts = state.contacts.filter(contact => contact.id !== action.payload) 
  }
  }
  
})



const contactsUppdate = createSlice({
  name: 'contactUppdate',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload
    }
  }
})


export const contactReducer = contactsSlice.reducer;

export const contactReducerUppdate = contactsUppdate.reducer



export const { updateFilter } = contactsUppdate.actions;



export const { createContact, deleteContact } = contactsSlice.actions;