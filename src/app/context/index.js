'use client'
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
export const VacancyContext = createContext();

export const VacancyProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isDataChange, setIsDataChange] = useState(true);
    const [page, setPage] = useState(1);
    const [last_page, setLastPage] = useState(null);
    const [user, setUser] = useState({
        name: '',
        image: '',
    });
    const [token, setToken] = useState('');

    const PAGE_API = `https://dev-example.sanbercloud.com/api/job-vacancy?page=${page}`;
    const MAIN_API = `https://dev-example.sanbercloud.com/api/job-vacancy`;
    const LOGIN_API = 'https://dev-example.sanbercloud.com/api/login';
    const RESET_API = `https://dev-example.sanbercloud.com/api/change-password`;

    const PaginationNext = () => {
        if (page < last_page) {
            setPage(page + 1)
            setIsDataChange(true)
        }
    }

    const PaginationPrev = () => {
        if (page > 1) {
            setPage(page - 1);
            setIsDataChange(true)
        }
    }

    const Logout = (router) => {
        const datatoken = Cookies.get('token') || null;
        setLoading(true)
        if (datatoken !== null) {
            Cookies.remove('token')
            Cookies.remove('name')
            Cookies.remove('image')
            setToken('')
            setUser({
                name: '',
                image: ''
            })
            setLoading(false)
            setIsDataChange(true)
            router.push('/login')
        }
    }

    const getToken = () => {
        const datatoken = Cookies.get('token') || null;
        if (datatoken !== null) {
            setToken(Cookies.get('token'));
            setUser({
                name: Cookies.get('name'),
                image: Cookies.get('image')
            })
        }
    }

    useEffect(() => {
        if (isDataChange) {
            getToken()
            setIsDataChange(false)
        }
    }, [isDataChange])

    //get data
    const getData = async () => {
        setLoading(true);
        const res = await fetch(PAGE_API, { cache: 'no-store' })
        let datas = await res.json();
        setLastPage(datas.last_page);
        setData(datas.data);
        setLoading(false);
    }
    useEffect(() => {
        if (isDataChange) {
            getData();
            setIsDataChange(false);
        }
    }, [isDataChange, setIsDataChange])


    //login
    const LoginSubmit = async (inputData, setLoading, router) => {
        setLoading(true);
        try {
            const res = await axios.post(LOGIN_API, {
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
            setIsDataChange(false);
        }
        catch (err) {
            console.log(err)
            console.log('Email or password invalid');
        }
    }


    //submit new job
    const JobSubmit = async (router, inputData, setInputData, setLoading) => {
        setLoading(true)
        const config = {
            headers: { Authorization: `Bearer ${Cookies.get('token')}` },
        };
        try {
            const res = await axios.post(MAIN_API, inputData, config)
            const data = res.data;
            setInputData((prevInput) => ({
                ...prevInput,
                title: data.title,
                job_description: data.job_description,
                job_qualification: data.job_qualification,
                job_type: data.job_type,
                job_tenure: data.job_tenure,
                job_status: data.job_status,
                company_name: data.company_name,
                company_image_url: data.company_image_url,
                company_city: data.company_city,
                salary_min: data.salary_min,
                salary_max: data.salary_max
            }))
            setLoading(false);
            setIsDataChange(true);
            router.push('/vacancy');
        } catch (err) {
            console.log(err)
        }
    }
    //function delete job
    const DeleteJob = (id, setLoading, router) => {
        setLoading(true);
        const config = {
            headers: { Authorization: `Bearer ${Cookies.get('token')}` },
        };
        axios.delete(`${MAIN_API}/${id}`, config)
            .then(() => {
                setLoading(false);
                setIsDataChange(true);
                router.push('/vacancy')
            })
            .catch(err => console.log(err))
    }
    //function change password
    const ChangePassword = (inputData, setInputData, router) => {
        setLoading(true);
        const config = {
            headers: { Authorization: `Bearer ${Cookies.get('token')}` },
        };
        try {
            if (inputData.new_password === inputData.new_confirm_password) {
                axios.post(RESET_API, inputData, config)
                setLoading(false);
                alert("password berhasil diubah")
            }
        } catch (err) {
            console.log(err);
        }

    }
    const proViderValue = {
        data,
        setData,
        loading,
        setLoading,
        LoginSubmit,
        JobSubmit,
        DeleteJob,
        PaginationNext,
        PaginationPrev,
        page,
        last_page,
        ChangePassword,
        token,
        setToken,
        user,
        setUser,
        Logout
    }

    return (
        <VacancyContext.Provider value={proViderValue}>
            {children}
        </VacancyContext.Provider>
    )
}