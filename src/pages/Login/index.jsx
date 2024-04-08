
import React, { useState } from 'react'
import InputField from '../../component/InputFiled'
import Button from '../../component/Button'
import logo from "../../images/logo.png"
import bg from "../../images/bg.png"
import { useDispatch, useSelector } from 'react-redux';
import { loginUserSuccess, loginUserFailure } from "../../redux/slice/user"
import axios from 'axios';

const Login = () => {
  const [users, setUsers] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const error = useSelector(state => state.login.error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/loginuser', users);
      dispatch(loginUserSuccess(response.data));
    } catch (error) {
      dispatch(loginUserFailure(error.response.data.message));
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
              <div> <Button children="Create Account" size='large' variant="normal"/></div>
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