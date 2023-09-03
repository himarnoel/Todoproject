import React from "react";
import DayComponent from "../MinorComponents/DayComponent";
import CalendarComponents from "../MinorComponents/CalendarComponents";

const Main: React.FC = () => {
  return (
    <div className=" mt-10 w-full ">
      <div className="flex lg:h-[80vh]">
        <div className=" w-[65%]  bg-greenb-300">
          <p>January 2023</p>
          <div className="hide-scrollbar flex overflow-x-auto mt-2">
            <DayComponent date={31} day="Sun" selected={false} />{" "}
            <DayComponent date={1} day="Mon" selected={false} />{" "}
            <DayComponent date={2} day="Tue" selected={false} />{" "}
            <DayComponent date={3} day="Wed" selected={false} />{" "}
            <DayComponent date={4} day="Thur" selected={false} />{" "}
            <DayComponent date={5} day="Fri" selected={false} />{" "}
            <DayComponent date={6} day="Sat" selected={false} />{" "}
            <DayComponent date={7} day="Sun" selected={false} />{" "}
            <DayComponent date={8} day="Mon" selected={false} />
            <DayComponent date={9} day="Tue" selected={false} />{" "}
            <DayComponent date={10} day="Wed" selected={false} />{" "}
            <DayComponent date={11} day="Thur" selected={false} />{" "}
            <DayComponent date={12} day="Fri" selected={false} />{" "}
            <DayComponent date={13} day="Sat" selected={false} />{" "}
            <DayComponent date={14} day="Sun" selected={false} />{" "}
          </div>
        </div>
        <div className="w-[35%]  ">
          <CalendarComponents />
        </div>
      </div>
    </div>
  );
};

export default Main;
