import React, { useState } from 'react';
import InputField from '../../component/InputFiled';
import Button from '../../component/Button';
import logo from "../../images/logo.png";
import bg from "../../images/bg.png";
import axios from 'axios'; // Import axios for making HTTP requests

const initialState = {
  name: "",
  email: "",
  password: ""
};

const Register = () => {
  const [users, setUser] = useState(initialState);

  const onInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...users, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Make a POST request to your backend registration endpoint
      const response = await axios.post('/registeruser', users);
      console.log(response.data); // Log the response from the backend
      // Handle success, show a success message or redirect the user
    } catch (error) {
      console.error('Error:', error); // Log any errors
      // Handle error, show an error message to the user
    }
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
              <div><a className="w-[150px] h-10 item rounded-large flex flex-shrink-0 flex-wrap justify-center bg-white shadow-xl items-center gap-3 border border-none hover"href="/login">Login</a></div>
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
