import axios from 'axios';

export const RegisterAuth = async (event, inputData) => {
    event.preventDefault();
    try {
        const res = await axios.post('https://dev-example.sanbercloud.com/api/register', {
            name: inputData.name,
            email: inputData.email,
            image_url: inputData.image,
            password: inputData.password
        })
        console.log(`'Berhasil': ${res.data}`)
    } catch (err) {
        console.log(JSON.stringify(err))
    }
}