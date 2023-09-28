'use client'
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
export const VacancyContext = createContext();

export const VacancyProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const res = await fetch('https://dev-example.sanbercloud.com/api/job-vacancy')
            let datas = await res.json();
            setData(datas.data);
            setLoading(false);
        }
        getData();
    }, [])

    const LoginSubmit = async (inputData, setLoading, router) => {
        setLoading(true);
        try {
            const res = await axios.post('https://dev-example.sanbercloud.com/api/login', {
                email: inputData.email,
                password: inputData.password
            })
            const data = res.data;
            const user = data.user
            Cookies.set('name', user.name, { expires: 1 });
            Cookies.set('image', user.image_url, { expires: 1 });
            Cookies.set('token', data.token, { expires: 1 });
            console.log('berhasil login');
            setLoading(false);
            router.push('/vacancy');
        }
        catch (err) {
            console.log(err)
            console.log('Email or password invalid');
        }
    }

    const proViderValue = {
        data,
        setData,
        loading,
        setLoading,
        LoginSubmit
    }

    return (
        <VacancyContext.Provider value={proViderValue}>
            {children}
        </VacancyContext.Provider>
    )
}