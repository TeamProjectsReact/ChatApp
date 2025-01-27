import React, { useState } from 'react'
import { BsChatLeftFill, BsMortarboardFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import  secureLocalStorage  from  "react-secure-storage";


const SignIn = () => {
    const navigate = useNavigate()
    // for login data
    const [LoginData, SetLoginData] = useState({
        email: '',
        password: ''
    })

    // send data to backend using axios
    const headleSubmit = async (e) => {
        e.preventDefault();

        // login to system

        try{
            const res = axios.post('http://localhost:5000/auth/SignIn', LoginData)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Login Successfull")
                    localStorage.setItem('token', res.data.Token)
                    navigate('/Dashboard')
                    // login user Email 
                    secureLocalStorage.setItem('Login1', res.data.Result.email)
                    secureLocalStorage.setItem('Login2', res.data.Result.Role)                    
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch (err){
            console.log(err)
        }
    }
  return (
    <div className={`bg-cover min-h-screen py-24 px-8 bg-[url('https://wallpapercave.com/wp/wp3998740.png')]`} >
        <div className="md:grid grid-cols-3 gap-2">
            <div className=""></div>
            <div className="">
                <div className="bg-white py-16 px-8 rounded-2xl shadow-md w-full ">
                    <div className="">
                        <center>
                            <BsChatLeftFill className='h-20 w-auto bg-green-500 p-4 rounded-xl text-green-800 shadow-md'/>
                            <p className="text-bold pt-1">Online ChatApp</p>
                        </center>
                    </div>
                    <div className="my-4">
                        <form onSubmit={headleSubmit}>
                            <div className="my-2 md:mx-8">
                                <label htmlFor="" className=''>Email : </label>
                                <input type="email" name="" id="email" className="w-full h-12 pl-2 rounded bg-gray-200" required placeholder='Enter Email Address'
                                onChange={e => SetLoginData({...LoginData, email:e.target.value})}/>
                            </div>
                            <div className="my-2 md:mx-8">
                                <label htmlFor="" className=''>Password : </label>
                                <input type="password" name="" id="password" className="w-full h-12 pl-2 rounded bg-gray-200" required placeholder='Enter Password' 
                                onChange={e => SetLoginData({...LoginData, password:e.target.value})}/>
                            </div>
                            <div className="my-2 md:mx-8">
                                <button type='submit' className='mt-8 font-semibold w-full py-4 px-8 rounded bg-blue-500 text-white shadow-md duration-500 hover:bg-blue-600'>SignIn</button>
                            </div>
                        </form>
                        <Link><p className="my-2 md:mx-8 text-blue-500 font-semibold">Forget Password ? </p></Link>
                    </div>
                    <hr className='my-2'/>
                    <p className="my-4">Don't have an Account ? <Link to={'/SignUp'}><span className="text-blue-500">SignUp</span></Link></p>
                </div>  
                <p className="text-center text-white pt-1">&copy; JKChatApp || Developed and Designed By JehanKandy</p>
            </div>
            <div className=""></div>
        </div>
    </div>
  )
}

export default SignIn