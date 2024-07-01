import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import { BsChatLeftFill } from "react-icons/bs";

const Dashboard = () => {
    const navigate = useNavigate()
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("Login2");

    const logout = () => {
        localStorage.clear()
        navigate('/')
        window.location.reload();
    }

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className="bg-[url('https://wallpapercave.com/wp/wp3998740.png')] bg-cover bg-center py-8 px-12 min-h-screen">
                <div className="">
                    <BsChatLeftFill className='h-16 w-auto bg-green-500 p-4 rounded-xl text-green-800 shadow-md'/>
                    <p className="text-bold pt-1">Online ChatApp</p>
                </div>
            </div>
        )
    }
    else{
        useEffect(() => {
            localStorage.clear()
            navigate('/')
        })
    }
}

export default Dashboard