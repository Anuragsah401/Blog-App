import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-[2rem] justify-center items-center mt-[0.5rem] text-[25px] text-center text-purple-50 font-regular">
      <div className="flex-1 mr-[1rem] h-[2px] bg-white"></div>
      <div className=" font-semibold">Blog App</div>
      <div className="flex-1 ml-[1rem] h-[2px] bg-white"></div>
    </div>
  );
};

export default Logo;
