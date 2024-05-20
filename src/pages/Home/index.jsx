import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../../component/Navbar';
import Button from '../../component/Button';
import Card from '../../component/Card';
import Footer from '../../component/Footbar';
import banner from "../../images/banner.png";
import bg from "../../images/bg.png";
import logo from "../../images/logo.png"

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 5; // Number of original slides
  const transitionRef = useRef(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalSlides + 2));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === totalSlides) {
      setTimeout(() => {
        transitionRef.current = false;
        setCurrentIndex(0);
      }, 500);
    } else if (currentIndex === totalSlides + 1) {
      setTimeout(() => {
        transitionRef.current = false;
        setCurrentIndex(1);
      }, 500);
    } else {
      transitionRef.current = true;
    }
  }, [currentIndex, totalSlides]);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  const cardData = [
    {
      imgSrc: banner,
      title: "image 1",
      description: "High-quality brush with lavender essence.",
      buttonText: "Shop now",
      buttonVariant: "black",
    },
    {
      imgSrc: logo,
      title: "image 2",
      description: "Nourishing serum with rose extracts.",
      buttonText: "Shop now",
      buttonVariant: "black",
    },
    {
      imgSrc: banner,
      title: "image 3",
      description: "Soothing cream with chamomile.",
      buttonText: "Shop now",
      buttonVariant: "black",
    },
    {
      imgSrc: banner,
      title: "image 4",
      description: "Refreshing cleanser with mint.",
      buttonText: "Shop now",
      buttonVariant: "black",
    },
    {
      imgSrc: bg,
      title: "image 5",
      description: "Hydrating moisturizer with aloe vera.",
      buttonText: "Shop now",
      buttonVariant: "black",
    },
    // Duplicate first two cards for seamless transition
    {
      imgSrc: banner,
      title: "image 1",
      description: "High-quality brush with lavender essence.",
      buttonText: "Shop now",
      buttonVariant: "black",
    },
    {
      imgSrc: logo,
      title: "image 2",
      description: "Nourishing serum with rose extracts.",
      buttonText: "Shop now",
      buttonVariant: "black",
    },
  ];

  return (
    <div>
      <Navbar />
      {/* Banner */}
      <div className='bg-bg_secondary h-screen'>
        <div className='flex flex-row justify-between text-center items-center p-8 pt-24'>
          <div className='flex flex-col gap-12 justify-center items-center '>
            <div className=' font-serif text-5xl font-medium'>Best Skincare Products For Youthful Skin</div>
            <div className='font-sans text-lg '>Let your inner beauty shine with our top quality skincare and beauty products.</div>
            <div><Button children="Shop now" size='large' variant='normal' /></div>
          </div>
          <div>
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
      {/* Featured Products */}
      <div className='flex flex-col items-center pt-20 h-screen'>
        <div className="font-sans text-4xl font-medium mb-10">Featured Products</div>
        <div className='overflow-hidden w-full'>
          <div
            className='flex'
            style={{
              transform: `translateX(-${currentIndex * 100 / 3}%)`,
              transition: transitionRef.current ? 'transform 0.5s ease-in-out' : 'none'
            }}
          >
            {cardData.map((card, index) => (
              <div key={index} className='slide'>
                <Card variant="large" linkTo={"/"} applyHoverEffect={true}>
                  <img src={card.imgSrc} alt='photo' width={300} height={300} />
                </Card>
                <div className='pl-10 mt-4'>
                  <p className='text-lg'>{card.title}</p>
                  <Button children={card.buttonText} variant={card.buttonVariant} size='small' />
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </div>
      {/* New Collection */}
      <div className='flex flex-col items-center h-screen'>
        <div className="font-sans text-4xl font-medium">New Collection</div>
        <div className='flex flex-wrap justify-between px-10'>
          {[...Array(8)].map((_, index) => (
            <div key={index} className='flex flex-col'>
              <Card variant="small" />
              <p className='pl-10 text-lg'>Lavender brush</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
