import Image from "next/image";
import React from "react";

const Button = ({ label, iconURL, bgColor, borderColor, textColor }) => {
  return (
    <button className={` w-fit  flex items-center justify-center gap-2 px-4 py-3 border font-montserrat text-lg leading-none  rounded-full ${bgColor ?`${bgColor}${borderColor}${textColor}`:`bg-coral-red text-white` }`}>
      {label}
      {iconURL && (
        <Image
          src={iconURL}
          alt=""
          height={24}
          width={24}
          className="ml-2 rounded-full "
        />
      )}
    </button>
  );
};

export default Button;
