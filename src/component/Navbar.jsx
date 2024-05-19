import React from 'react';
import logo from '../images/logo.png';
import { VscAccount } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
export const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 bg-white flex justify-between items-center px-6 py-4 shadow-md">
      <div>
        <img src={logo} alt="logo" className="h-10" />
      </div>
      <ul className='flex flex-row gap-10 list-none'>
        {['Home', 'Service', 'Blog', 'About', 'Contact'].map((item) => (
          <li key={item}>
            <a 
              href="/" 
              className='font-sans text-lg font-medium no-underline list-none text-black hover:text-bt_primary transition-colors duration-300'
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className='flex flex-row gap-6'>
        <div><BsCart3 size={24} className="hover:text-blue-500 transition-colors duration-300" /></div> 
        <div><VscAccount size={24} className="hover:text-blue-500 transition-colors duration-300" /></div>  
      </div>
    </div>
  );
}

export default Navbar;
