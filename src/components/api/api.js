import axios from 'axios';

export const allContactsGet = async () => {
    const {data} = await axios.get(`https://64f1e05b0e1e60602d24644f.mockapi.io/contacts`)
    console.log(data);
    return data
}

export const addContacts = async (contactData) => {
    const {data} = await axios({
        method: 'POST',
        url: `https://64eaff72e51e1e82c576e82b.mockapi.io/Contacts`,
        data: contactData
    })
    console.log(data);
    return data
}



