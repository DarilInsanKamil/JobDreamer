import Cookies from "js-cookie";

export const Logout = (router) => {
    Cookies.remove('token');
    Cookies.remove('image');
    Cookies.remove('name');
    router.push('/login')
}