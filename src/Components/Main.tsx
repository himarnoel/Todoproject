import React from "react";
import DayComponent from "./DayComponent";

const Main: React.FC = () => {
  return (
    <div className=" mt-5 w-full bg-green-400">
      <div className="flex lg:h-[80vh]">
        <div className=" w-[80%]  pt-4">
          <p>January 2023</p>
          <div className="hide-scrollbar flex overflow-x-auto">
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />{" "}
            <DayComponent date={10} day="7" />
          </div>
        </div>
        <div className="w-[20%] bg-blue-400 "></div>
      </div>
    </div>
  );
};

export default Main;
