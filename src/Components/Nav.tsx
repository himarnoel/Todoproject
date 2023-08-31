import React from "react";

import content from "../assets/Content.png";
import logo from "../assets/logo.png";
const Nav: React.FC = () => {
  return (
    <div>
      <div className="w-screen items-center py-4 px-20 flex justify-between  bg-white border-b border-[#EAECF0]">
        <img src={logo} alt="" />

        <img src={content} alt="" />
      </div>
    </div>
  );
};

export default Nav;
