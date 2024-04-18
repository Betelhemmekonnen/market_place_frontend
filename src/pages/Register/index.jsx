"use client"
import React, { useState,useEffect } from 'react';
import InputField from '../../component/InputFiled';
import Button from '../../component/Button';
import logo from "../../images/logo.png";
import bg from "../../images/bg.png";
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../redux/slice/user'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  name: "",
  email: "",
  password: ""
};

const Register = () => {
  const [users, setUser] = useState(initialState);
  const dispatch=useDispatch();
  const onInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...users, [name]: value });
  };
 
  const { user, success,valid, isLoggedIn, error,msg } = useSelector(state => state.auth);
  

  useEffect(() => {
    if (error) {
      toast.error(error);
    } else if (success) {
      console.log(success)
      // Handle the success status
      toast.success(msg);
   // Perform any necessary actions on success
    }
  }, [error, success]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("user",users)
      dispatch(register(users));
    } catch (error) {
      console.log(error)
    }
  };

  return (
	<div className='h-screen bg-bg_primary flex flex-row justify-between'>
    <div className=' md:flex justify-center items-center w-40% bg-white m-5 hidden'>
        <img src={bg} alt="bg" />
    </div>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        className="absolute right-0 top-0 mt-20 w-[40px] max-w-sm p-4"
      />
    <div className='flex items-center justify-center md:w-[60%] w-full'>
      <div className='flex flex-col w-[55%] justify-start gap-10'>
        <div className='flex flex-col gap-2'>
           <div> <img src={logo} alt="logo" /></div>
           <p className="text-xl">Welcome Back. Please Login To Your Account</p>
        </div>
        <form onSubmit={handleSubmit} >
           <div className='flex flex-col gap-8'>
            <InputField
               type="text"
               placeholder="UserName"
               name="username"
               value={users.username}
               onChange={onInputChange}
            />
               <InputField
               type="text"
               placeholder="Email"
               name="email"
               value={users.email}
               onChange={onInputChange}
            />
            <InputField
               type="password"
               placeholder="Password"
               name="password"
               value={users.password}
               onChange={onInputChange}
            />
            <div className='flex md:flex-row md:justify-between flex-col gap-3 '>
              <div><Button children="Regiter" size='large'/></div>
              <div><a  className="custom-link" href="/login">Login</a></div>
            </div>
          </div>
            </form>
            <div>
            </div>
        </div>
        </div>
        </div>

  )
}
export default Register;
