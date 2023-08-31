import React from "react";
import DayComponent from "./DayComponent";

const Main: React.FC = () => {
  return (
    <div className="px-20 mt-5">
      <div className="flex lg:h-[80vh]">
        <div className=" w-[170rem]  pt-4">
          <p>January 2023</p>
          <div className="flex ">
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />
          </div>
        </div>
        <div className="w-full bg-blue-400 "></div>
      </div>
    </div>
  );
};

export default Main;
