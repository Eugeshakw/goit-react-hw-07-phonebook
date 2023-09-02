import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {allContactsGet} from '../api/api'

export const fetchContacts = createAsyncThunk(
  'contact/fetchContacts',
  async (_, thunkApi) => {

    try{
      const response = await allContactsGet()
    
    return response.data;
    } catch(err) {
      thunkApi.rejectWithValue(err.message)
    }
    
  }

)


const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};



const contactsSlice = createSlice({

  name: 'contacts',
  initialState,
  reducers: {
    
      createContact: (state, {payload}) => {
      state.contacts.push(payload)
      
    },
    deleteContact: 
    (state, {payload}) => {
    state.contacts.items = state.contacts.items.filter(contact => contact.id !== payload) 
  },
    updateFilter: (state, action) => {
      state.filter = action.payload
  }
  },
  extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending, state => {
      state.contacts.isLoading = true;
      // state.error = null;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
      // state.error = null;
    })
    .addCase(fetchContacts.rejected,(state, action) => {
      state.contacts.isLoading = false;
      // state.error = action.error.message; 
    })
  }
})






export const contactReducer = contactsSlice.reducer;

// export const contactReducerUppdate = contactsSlice.reducer

export const { createContact, deleteContact, updateFilter } = contactsSlice.actions;