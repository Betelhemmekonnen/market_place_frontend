import React from "react";

function InputField({ type, placeholder, name, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={`bg-white h-[40px] w-full rounded border-2 border-[#DCDCDC] px-4 py-2 text-sm text-tx_secondary placeholder-tx_addtional focus:outline-none md:h-[51px]`}
    />
  );
}
export default InputField;