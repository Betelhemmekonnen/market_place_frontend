import React from 'react';
import logo from '../images/logo.png';
import { VscAccount } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 bg-white flex justify-between items-center px-6 py-4 shadow-md">
      <div>
        <img src={logo} alt="logo" className="h-10" />
      </div>
      <ul className='flex flex-row gap-10 list-none'>
        <li className="relative group">
          <a href="/" className='hover:text-bt_primary font-sans text-lg font-medium no-underline text-black hover:text-blue-500 transition-colors duration-300 flex items-center'>
            Home <FaChevronDown size={12} className="ml-1 transform group-hover:rotate-180 transition-transform duration-300" />
          </a>
          <ul className="absolute text-center left-1/2 transform -translate-x-1/2  w-[120px] list-none bg-black border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
            <li><a href="/" className="block no-underline px-4 py-2 text-white hover:bg-gray-100 active:bg-card_hover hover:bg-card_hover">Submenu 1</a></li>
            <li><a href="/" className="block no-underline px-4 py-2 text-white hover:bg-gray-100 active:bg-card_hover hover:bg-card_hover">Submenu 2</a></li>
            <li><a href="/" className="block no-underline px-4 py-2 text-white hover:bg-gray-100 active:bg-card_hover hover:bg-card_hover">Submenu 3</a></li> 
            <li><a href="/" className="block no-underline px-4 py-2 text-white hover:bg-gray-100 active:bg-card_hover hover:bg-card_hover">Submenu 4</a></li>
          </ul>
        </li>
        <li><a href="/" className='hover:text-bt_primary font-sans text-lg font-medium no-underline text-black hover:text-blue-500 transition-colors duration-300'>Blog</a></li>
        <li><a href="/" className='font-sans text-lg font-medium no-underline text-black hover:text-bt_primary hover:text-blue-500 transition-colors duration-300'>About</a></li>
        <li className="relative group">
          <a href="/" className='hover:text-bt_primary font-sans text-lg font-medium no-underline text-black hover:text-blue-500 transition-colors duration-300 flex items-center'>
            Service <FaChevronDown size={12} className="ml-1 transform group-hover:rotate-180 transition-transform duration-300" />
          </a>
          <ul className="absolute text-center left-1/2 transform -translate-x-1/2  w-[150px] list-none bg-black border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
            <li><a href="/" className="block no-underline px-4 py-2 text-white hover:bg-gray-100 active:bg-card_hover hover:bg-card_hover">Submenu 1</a></li>
            <li><a href="/" className="block no-underline px-4 py-2 text-white hover:bg-gray-100 active:bg-card_hover hover:bg-card_hover">Submenu 2</a></li>
            <li><a href="/" className="block no-underline px-4 py-2 text-white hover:bg-gray-100 active:bg-card_hover hover:bg-card_hover">Submenu 3</a></li> 
            <li><a href="/" className="block no-underline px-4 py-2 text-white hover:bg-gray-100  hover:bg-card_hover">Submenu 4</a></li>
          </ul>
        </li>
        <li><a href="/" className='hover:text-bt_primary font-sans text-lg font-medium no-underline text-black hover:text-blue-500 transition-colors duration-300'>Contact</a></li>
      </ul>
      <div className='flex flex-row gap-6'>
        <div><BsCart3 size={24} className="hover:text-blue-500 transition-colors duration-300" /></div> 
        <div><VscAccount size={24} className="hover:text-blue-500 transition-colors duration-300" /></div>  
      </div>
    </div>
  );
}

export default Navbar;
