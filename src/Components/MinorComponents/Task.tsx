type Props = {};

const Task: React.FC<Props> = () => {
  return (
    <div>
      <div className="w-full h-[5rem] bg-[#F9FAFB] border-b px-[16px] py-[24px] mt-6 border-[#EAECF0] flex justify-between items-center">
        <div className="flex justify-between items-center  ">
          <input type="checkbox" />
          <div className="flex flex-col ml-4 gap-y-2">
            <p>Create Wireframe</p>
            <p>10:30 am - 11:30 am</p>
          </div>
        </div>
        <p>Today</p>
      </div>
    </div>
  );
};

export default Task;
