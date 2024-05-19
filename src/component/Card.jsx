import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card = ({ children, variant, linkTo, applyHoverEffect }) => {
  let classname = "";
  if (variant === "large") {
    classname = 'w-[350px] h-[350px] bg-card_color  p-5 m-6';
  } else if (variant === "small") {
    classname = 'w-[250px] h-[250px] bg-card_color  p-5 m-6';
  } else {
    classname = 'w-[700px] h-[900px] bg-card_color  p-5 m-6 ';
  }

  return (
    <a href={linkTo} className="relative" style={{ textDecoration: 'none' }}>
      <div className={`${classname} group`} >
        {children}
        {applyHoverEffect && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 m-5 bg-bg_secondary/60 backdrop-blur-sm duration-0"></div>
        )}
      </div>
    </a>
  );
};

export default Card;


