import React from "react";
import Task from "../MinorComponents/task";

type Props = {};

const Tasks = (props: Props) => {
  return (
    <div>
      <h1 className="text-[#101828] font-semibold text-base mt-10">My Tasks</h1>
      <Task /> <Task /> <Task /> <Task /> <Task />
      <Task /> <Task />
    </div>
  );
};

export default Tasks;
