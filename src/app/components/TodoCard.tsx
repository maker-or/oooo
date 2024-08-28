import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';
interface TodoCardProps {
  title: string;
  date: string;
  status: string;
}

const TodoCard = ({ title, date, status }: TodoCardProps) => {
  return (
    <div className="flex gap-4 w-full border-b-[1px] mb-6 p-3 items-center ">


      <div className="h-[60px] w-[60px] border-[3px] border-[#757575] rounded-full flex items-center justify-center text-orange-600 bg-[#F7EEE3] text-2xl">
        {status === 'completed' && <IoCheckmarkSharp size={40} />}
      </div>


      <div className="flex flex-col gap-0">
        <h2 className="text-[1.5em] font-medium">{title}</h2>
        <p className="text-sm text-[#f7eee3d7]">{date}</p>
      </div>
    </div>
  );
};

export default TodoCard;
