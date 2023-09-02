import axios from 'axios';

export const allContactsGet = async () => {
    const {data} = await axios.get(`https://64f1e05b0e1e60602d24644f.mockapi.io/contacts`)
    // console.log(data);
    return data
}



