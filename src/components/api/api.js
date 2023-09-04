import axios from 'axios';

export const allContactsGet = async () => {
    const response = await axios.get(`https://64f1e05b0e1e60602d24644f.mockapi.io/contacts`)
    console.log(response);
    return response.data
}

export const addContacts = async (contactData) => {
    const response = await axios({
        method: 'POST',
        url: `https://64f1e05b0e1e60602d24644f.mockapi.io/contacts`,
        data: contactData
    })
    console.log(response);
    return response.data
}

export const removeContacts = async (id) => {
    const response = await axios.delete(`https://64f1e05b0e1e60602d24644f.mockapi.io/contacts/${id}`);
    return response.data
}



