import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
const Morning: React.FC = () => {
  return (
    <div className="px-20 mt-20">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <p className="text-3xl font-bold text-[#101828]">Good Morning</p>
          <p className="text-[#475467] text-base">You got some task to do. </p>
        </div>
        <button className="bg-[#3F5BF6] py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] px-3 text-sm rounded-lg justify-between text-[#fff] flex  items-center">
          {" "}
          <AiOutlinePlus className="mr-2 text-lg text-[#fff]" /> Create New Task
        </button>
      </div>
    </div>
  );
};

export default Morning;
