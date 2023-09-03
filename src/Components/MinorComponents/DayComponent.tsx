interface Props {
  date: number;
  day: string;
  selected: boolean;
}

const DayComponent = (props: Props) => {
  return (
    <div>
      <div
        className={
          props.selected
            ? "  text-white  mx-2 rounded-lg font-semibold flex flex-col justify-center  items-center bg-[#3F5BF6] border border-[#3F5BF6] px-[10px] py-[16px] w-[62px] text-sm"
            : "text-[#344054] mx-2 rounded-lg font-semibold flex flex-col justify-center  items-center  bg-white border   border-[#D0D5DD] px-[10px] py-[16px] w-[62px] text-sm cursor-pointer"
        }
      >
        <p className="">{props.date}</p>
        <p className="">{props.day}</p>
      </div>
    </div>
  );
};

export default DayComponent;
