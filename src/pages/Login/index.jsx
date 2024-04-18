
import React, { useState,useEffect } from 'react'
import InputField from '../../component/InputFiled'
import Button from '../../component/Button'
import logo from "../../images/logo.png"
import bg from "../../images/bg.png"
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slice/user'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [users, setUsers] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
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
      dispatch(login(users));
    } catch (error) {
      console.log(error)
    }
  };
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });

  };
  return (
  <div className='h-screen bg-bg_primary flex flex-row justify-between'>
    <div className=' md:flex justify-center items-center w-40% bg-white m-5 hidden'>
        <img src={bg} alt="bg" />
    </div>
    <div className='flex items-center justify-center md:w-[60%] w-full'>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        className="absolute right-0 top-0 mt-20 w-[40px] max-w-sm p-4"
      />
      <div className='flex flex-col w-[55%] justify-start gap-10'>
        <div className='flex flex-col gap-2'>
           <div> <img src={logo} alt="logo" /></div>
           <p className="text-xl">Welcome Back. Please Login To Your Account</p>
        </div>
        <form onSubmit={handleSubmit}>
           <div className='flex flex-col gap-8'>
            <InputField
               type="text"
               placeholder="UserName or Email"
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
              <div><input type="checkbox"/>Remember me</div>
              <div className='text-bt_primary'>forgot password?</div>
            </div>
            <div className='flex md:flex-row md:justify-between flex-col gap-3 '>
              <div><Button children="Login" size='large' onSubmit={handleSubmit} /></div>
              <div><a  className="custom-link" href="/register">Create Account</a></div>
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
export default Login;