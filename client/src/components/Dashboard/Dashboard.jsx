import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import { BsChatLeftFill, BsPersonFillGear, BsPower } from "react-icons/bs";

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
                <div className="md:flex justify-between">
                    <div className="flex ">
                        <BsChatLeftFill className='h-16 w-auto bg-green-500 p-4 rounded-xl text-green-800 shadow-md'/>
                        <p className="font-bold text-white pt-1 text-2xl pl-2 pt-3 ">Online ChatApp</p>
                    </div>
                    <div className="flex mt-2">
                        <div className="flex">                            
                            <p className="text-2xl text-white flex">
                                <BsPersonFillGear />
                            </p>
                            <p className="pl-2 font-semibold text-white">My Profile</p>
                        </div>
                        <div className="flex pl-4 cursor-pointer" onClick={logout}>                            
                            <p className="text-2xl text-white flex">
                                <BsPower />
                            </p>
                            <p className="pl-2 font-semibold text-white">Logout</p>
                        </div>
                    </div>
                </div>
                <div className="md:grid grid-cols-3 gap-2 my-8 md:mx-4">
                    <div className="py-8 px-4 rounded-md bg-white w-full">
                        <div>
                            <img src="" alt="" />
                            Kamal Perera
                        </div>
                        <div className=''>
                            <img src="" alt="" />
                            Kamal Perera
                        </div>
                    </div>
                    <div className="col-span-2 bg-white rounded-md py-4 px-4">
                        oneChat
                    </div>
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