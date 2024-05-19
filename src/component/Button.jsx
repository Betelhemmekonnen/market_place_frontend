import React from "react";

const Button = ({ children, variant,size = "default", ...props }) => {
  let buttonSizeClass = "";

  if (size === "small") {
    buttonSizeClass = "h-[30px] w-[120px] px-4 text-sm rounded-small";
  } else if (size === "large") {
    buttonSizeClass = "w-[120px] h-10 item rounded-large";
  } 

  let classname = "";

  if (variant === "normal") { 
    classname = `${buttonSizeClass} flex flex-shrink-0 flex-wrap justify-center bg-white text-text_org shadow-xl items-center gap-3 border border-none hover focus:outline-none focus:ring-meke-500 focus:ring-offset-0 font-bold text-lg`;
  }else if(variant==="black"){
    classname = `${buttonSizeClass} flex flex-shrink-0 flex-wrap justify-center bg-black text-white shadow-xl items-center gap-3 border border-none hover focus:outline-none focus:ring-meke-500 focus:ring-offset-0 `;
  }
   else {
    classname = `${buttonSizeClass} flex flex-shrink-0 flex-wrap justify-center items-center gap-3 border border-none bg-bt_primary text-white hover:bg-blue-600 hover:opacity-80 focus:outline-none focus:ring-meke-500 focus:ring-offset-0`;
  }

  return (
    <button className={classname} {...props}>
      {children}
    </button>
  );
};

export default Button;