import axios from "axios";
import Cookies from "js-cookie";

const LoginSubmit = async (inputData, setLoading, router, setIsDataChange) => {
    setLoading(true);
    try {
        const res = await axios.post(LOGIN_API, {
            email: inputData.email,
            password: inputData.password
        })
        const data = res.data;
        const user = data.user
        // Cookies.set('name', user.name, { expires: 1 });
        // Cookies.set('image', user.image_url, { expires: 1 });
        // Cookies.set('token', data.token, { expires: 1 });
        console.log('berhasil login');
        setLoading(false);
        // router.push('/vacancy');
        setIsDataChange(false);
        alert('login berhasil')
    }
    catch (err) {
        console.log(err)
        console.log('Email or password invalid');
    }
}