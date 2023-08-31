interface Props {
  date: number;
  day: string;
}

const DayComponent = (props: Props) => {
  return (
    <div>
      <div className="  text-[#344054] rounded-lg font-semibold flex flex-col justify-center  items-center bg-white border-[#D0D5DD] p-2">
        <p className="">Wed</p>
        <p className="">3</p>
      </div>
    </div>
  );
};

export default DayComponent;
