import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { generateDate, months } from "../../Utils/Calendar";
import cn from "../../Utils/cn";
import "../../App.css";
type Props = {};

const CalendarComponents = (props: Props) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState<Dayjs>(currentDate);
  const [selectDate, setSelectDate] = useState<Dayjs>(currentDate);

  return (
    <div className="px-12">
      <div className="w-full h-96 mx-auto cutomshadow bg-white">
        div.
        <form action=""></form>
      </div>
    </div>
  );
};

export default CalendarComponents;
