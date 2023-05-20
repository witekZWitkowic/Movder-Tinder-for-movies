import React from 'react';
import { BsFillHeartFill, BsFillHeartbreakFill } from 'react-icons/bs'

interface ButtonProps {
  variation: number;
  background: string;
  hover: string;
}

const Button: React.FC<ButtonProps> = ({ variation, background, hover }) => {
  return (
    <>
      <div className={`${background} pressable flex justify-center sm:mt-0 mt-2 submit-button px-6 pb-1 h-[50px] w-[50px] rounded-full cursor-pointer transition ease-in-out duration-300 hover:${hover}`}>
        <button className="text-[25px] h-[53px] text-zinc-200 font-semibold">
          {variation === 1 ? <BsFillHeartFill /> : <BsFillHeartbreakFill />}
        </button>
      </div>
    </>
  );
};

export default Button;
