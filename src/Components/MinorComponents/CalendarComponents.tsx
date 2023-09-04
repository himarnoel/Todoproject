import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { generateDate, months } from "../../Utils/Calendar";
import cn from "../../Utils/cn";
import "../../App.css";
type Props = {};

const CalendarComponents = (props: Props) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Th", "Fr", "Sat"];
  const currentDate = dayjs();
  const [today, setToday] = useState<Dayjs>(currentDate);
  const [selectDate, setSelectDate] = useState<Dayjs>(currentDate);

  return (
    <div className="pl-10">
      <div className="w-full   rounded-lg  mx-auto cutomshadow bg-white py-4 px-4">
        <div className="s">
          <div className="flex justify-between items-center ">
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer text-[#667085] hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className=" cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              January 2023
            </h1>
            <GrFormNext
              className="w-5 text-[#667085] h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <form action="" className="gap-x-4 flex mt-4">
          <input
            type="text"
            className="w-full py-[8px] px-[14px] placeholder:text-[#101828] focus:outline-none border border-[#D0D5DD] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]"
          />
          <button
            type="submit"
            className="w-[30%] text-sm  font-semibold text-[#344054]  border border-[#D0D5DD] rounded-lg"
          >
            Today
          </button>
        </form>

        <div className="grid grid-cols-7 ">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="text-sm text-center h-14 w-14 grid place-content-center text-[#344054] select-none"
              >
                {day}
              </h1>
            );
          })}
        </div>
        <div className=" grid grid-cols-7 ">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="px-[10px] py-[8px] text-center  grid place-content-center text-sm "
                >
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-red-600 text-white" : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-black text-white"
                        : "",
                      "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                    )}
                    onClick={() => {
                      setSelectDate(date);
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponents;
