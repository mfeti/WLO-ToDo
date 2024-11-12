/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa";
import { months } from "../constants";
import TaskItem from "./TaskItem";
import { GiHamburgerMenu } from "react-icons/gi";
import Article from "./Article";

function Main({
  handleTaskCreate,
  tasks,
  handleCompleted,
  handleFavorite,
  isOpen,
  handleSidebar,
}) {
  const now = new Date();
  return (
    <section
      className={`${isOpen ? "blur-sm" : ""} w-full min-h-screen `}
      onClick={isOpen && handleSidebar}
    >
      <div className="py-10 px-10">
        {/* if mobile responsive  */}
        {!isOpen && (
          <div className="flex justify-between lg:hidden mb-5 items-center">
            <GiHamburgerMenu
              className="text-3xl cursor-pointer"
              onClick={handleSidebar}
            />
            <Article isInclude={false} />
          </div>
        )}
        {/* header section  */}
        <div className="flex justify-between">
          <div className="space-y-[2px]">
            <p className="text-2xl font-semibold text-stone-800">My Day</p>
            <p className="text-sm text-gray-700">
              {months[now.getMonth()]} {now.getFullYear()}
            </p>
          </div>
          <div className="">
            <button
              className="flex items-center px-3 py-1 bg-blue-100 text-blue-500 gap-2 rounded-xl hover:scale-105 transition-all duration-300 focus:ring focus:ring-blue-300"
              onClick={handleTaskCreate}
            >
              <FaPlus />
              <span className="font-semibold">New Task</span>
            </button>
          </div>
        </div>
        {/* main section  */}
        <div className="mt-5 space-y-5">
          {tasks?.length > 0 &&
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                {...task}
                onClick={handleFavorite}
                onChanged={handleCompleted}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Main;
