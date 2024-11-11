import { FaPlus } from "react-icons/fa";
import { months } from "../constants";
import TaskItem from "./TaskItem";
import { useState } from "react";

function Main() {
  const [isFavorite, setIsFavorite] = useState(false);
  const now = new Date();
  const handleToggle = (e) => {
    e.preventDefault();
    setIsFavorite((prev) => !prev);
  };
  return (
    <section className="w-full min-h-screen">
      <div className="py-10 px-10">
        {/* header section  */}
        <div className="flex justify-between">
          <div className="space-y-[2px]">
            <p className="text-2xl font-semibold text-stone-800">My Day</p>
            <p className="text-sm text-gray-700">
              {months[now.getMonth()]} {now.getFullYear()}
            </p>
          </div>
          <div className="">
            <button className="flex items-center px-3 py-1 bg-blue-100 text-blue-500 gap-2 rounded-xl hover:scale-105 transition-all duration-300 focus:ring focus:ring-blue-300">
              <FaPlus />
              <span className="font-semibold">New Task</span>
            </button>
          </div>
        </div>
        {/* main section  */}
        <div className="mt-5 space-y-5">
          <TaskItem isFavorite={isFavorite} onClick={handleToggle} />
        </div>
      </div>
    </section>
  );
}

export default Main;
