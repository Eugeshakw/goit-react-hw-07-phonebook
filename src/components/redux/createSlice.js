import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {allContactsGet, addContacts} from '../api/api'

export const fetchContacts = createAsyncThunk(
  'contact/fetchContacts',
  async (_, thunkApi) => {

    try{
      const response = await allContactsGet()
    
    return response

    } catch(err) {
      thunkApi.rejectWithValue(err.message)
    }
    
  }

)
export const fetchContactsAdd = createAsyncThunk(
  'contacts/addFetchContacts',
  async (data, thunkApi) => {
    try {
      const response = await addContacts(data)
      // console.log(response);
      return response
    } catch (err) {
      thunkApi.rejectWithValue(err.message)
    }
  }
  
)

const contactsSlice = createSlice({

  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  
  },
  reducers: {
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
      
      state.error = null;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;

      
      state.error = null;
    })
    .addCase(fetchContacts.rejected,(state, action) => {
      state.contacts.isLoading = false;
      state.error = action.error.message; 
    })
    .addCase(fetchContactsAdd.pending, state => {
      state.contacts.isLoading = true;
      state.error = null;
    })
    .addCase(fetchContactsAdd.fulfilled, (state, {payload}) => {
      state.contacts.isLoading = false;
      state.contacts.items.push(payload)
      
      
      state.error = null;
    })
    .addCase(fetchContactsAdd.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload
      state.error = null;
    })

  }
})






export const contactReducer = contactsSlice.reducer;



export const { createContact, deleteContact, updateFilter } = contactsSlice.actions;