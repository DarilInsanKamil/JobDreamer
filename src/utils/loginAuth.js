import axios from "axios"
import Cookies from "js-cookie";

export const LoginSubmit = async (event, inputData, router, setLoading) => {
    setLoading(true);
    event.preventDefault();
    try {
        const res = await axios.post('https://dev-example.sanbercloud.com/api/login', {
            email: inputData.email,
            password: inputData.password
        })
        // const data = res.data;
        // const user = data.user;
        console.log(res.data);
        // Cookies.set('name', user.name, {expires: 1})
        // Cookies.set('image', user.image_url, {expires: 1})
        // Cookies.set('token', data.token, { expires: 1 })
        console.log('berhasil login');
        setLoading(false);
        // router.push('/')
    }
    catch (err) {
        console.log(JSON.stringify(err))
        console.log('Email or password invalid');
    }
}