import React from 'react'
import Navbar from '../../component/Navbar';
import Button from '../../component/Button';
import banner from "../../images/banner.png"
import Card from '../../component/Card';
import Footer from '../../component/Footbar';
 const Home = () => {
  
  return (
    	<div>
     <Navbar/>
     {/* Banner */}
      <div className='bg-bg_secondary h-screen'>
        <div className='flex flex-row justify-between text-center items-center p-8 pt-24'>
        <div className='flex flex-col gap-12 justify-center items-center '>
          <div className=' font-serif text-5xl font-medium'>Best Skincare Products For Youthful Skin</div>
          <div className='font-sans text-lg '>Let your inner beauty shine with our top quality skincare and beauty products.</div>
          <div><Button children="Shop now" size='large' variant='normal' /></div>
        </div>
        <div>
              <img src={banner} alt=""/>
        </div>
        </div>
     </div>
      {/*featured*/}
      <div className='flex flex-col items-center pt-20 h-screen'>
        <div className="font-sans text-4xl font-medium">Featured Products</div>
          <div className='flex flex-wrap justify-between'>
         
            <div className='flex flex-col'>
               <Card variant="large" linkTo={"/"} applyHoverEffect={true}><img src={banner} alt='photo' width={300} height={300}/></Card>
               <div className='pl-10'>
                 <p className='text-lg'>Lavender bursh</p>
                 <Button  children="Shop now" variant="black" size='small'/>
               </div>  
            </div>
            
            <div className='flex flex-col'>
               <Card variant="large" linkTo={"/"} applyHoverEffect={true}><img src={banner} alt='photo' width={300} height={300}/></Card>
               <div className='pl-10'>
                 <p className='text-lg'>Lavender bursh</p>
                 <Button  children="Shop now" variant="black" size='small'/>
               </div>  
            </div> 
            
             <div className='flex flex-col'>
               <Card variant="large" linkTo={"/"} applyHoverEffect={true}><img src={banner} alt='photo' width={300} height={300}/></Card>
               <div className='pl-10'>
                 <p className='text-lg'>Lavender bursh</p>
                 <Button  children="Shop now" variant="black" size='small'/>
               </div>  
            </div>
          </div>
      </div>
            {/*New Collection*/}
        <div className='flex flex-col items-center h-screen'>
        <div className="font-sans text-4xl font-medium">New Collection</div>
          <div className='flex flex-wrap justify-between px-10'>
            <div className='flex flex-col'>
               <Card variant="small"/>
               <p className='pl-10 text-lg'>Lavender bursh</p>
            </div>
            <div className='flex flex-col'>
               <Card variant="small"/>
               <p className='pl-10 text-large'>Lavender bursh</p>
            </div>
            <div className='flex flex-col'>
               <Card variant="small"/>
               <p className='pl-10 text-large'>Lavender bursh</p>
              
            </div>
            <div className='flex flex-col'>
               <Card variant="small"/>
               <p className='pl-10 text-large'>Lavender bursh</p>
            </div>
            <div className='flex flex-col'>
               <Card variant="small"/>
               <p className='pl-10 text-lg'>Lavender bursh</p>
            </div>
            <div className='flex flex-col'>
               <Card variant="small"/>
               <p className='pl-10 text-large'>Lavender bursh</p>
            </div>
            <div className='flex flex-col'>
               <Card variant="small"/>
               <p className='pl-10 text-large'>Lavender bursh</p>
            </div>
            <div className='flex flex-col'>
               <Card variant="small"/>
               <p className='pl-10 text-large'>Lavender bursh</p>
            </div>
          </div>
          </div>
        <Footer/>
          </div>
 
  )
}
export default Home;

