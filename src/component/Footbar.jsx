import React from 'react'
import logo from '../images/logo.png'
import { VscAccount } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
export
 const Footer = () => {
  return (
	
        <div className='flex py-14 mt-16 justify-between px-40 flex-row gap-40 bg-bg_secondary'> 
		   <div className='flex flex-col gap-3'>
		     <div className='font-sans text-lg font-medium'>Myaccount</div>
			 <p>Lorem ipsum is placeholder text commonly used in the graphic, print,
				 and publishing industries for previewing layouts.</p>
		   </div>
		   <div className='flex flex-col gap-3'>
		     <div className='font-sans text-lg font-medium'>Contact</div>
			 <p>AASTU,Addis ababa,Ethiopia</p>
			 <p>contact@betty.com</p>
			 <p>0961616161</p>
			 <p>www.betty.com</p>
		   </div>
		   <div className='flex flex-col gap-3'>
		     <div className='font-sans text-lg font-medium'>Information</div>
			 <a href="/" className='no-underline text-black'>New product</a>
			 <a href="/" className='no-underline text-black'>New product</a>
			 <a href="/"  className='no-underline text-black'>New product</a>
			 <a href="/" className='no-underline text-black' >New product</a>
			 <a href="/" className='no-underline text-black'>New product</a>
	       </div>
		   <div className='flex flex-col gap-3'>
		     <div className='font-sans text-lg font-medium'>Information</div>
	       </div>
		</div>
       
    
  )
}
export default Footer;