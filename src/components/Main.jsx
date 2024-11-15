/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa";
import { months } from "../constants";
import TaskItem from "./TaskItem";
import { GiHamburgerMenu } from "react-icons/gi";
import Article from "./Article";
import { useEffect, useState } from "react";

function Main({
  handleTaskCreate,
  filterBy,
  handleCompleted,
  handleFavorite,
  isOpen,
  handleSidebar,
  isSideOpen,
  handleNavbar,
  tasks,
  searchBy,
}) {
  const now = new Date();
  const [filterTasks, setFilterTasks] = useState(tasks);
  useEffect(
    function () {
      if (searchBy.length > 0) {
        const filterTasks = tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(searchBy) ||
            task.tag.toLowerCase().includes(searchBy)
        );
        setFilterTasks(filterTasks);
        return;
      }
      if (filterBy.toLowerCase() === "all") {
        setFilterTasks(tasks);
        return;
      }
      if (filterBy.toLowerCase() === "completed") {
        const filterTasks = tasks.filter((task) => task.isCompleted);
        setFilterTasks(filterTasks);
        return;
      }
      const filterTasks = tasks.filter(
        (task) => task.tag.toLowerCase() === filterBy.toLowerCase()
      );

      setFilterTasks(filterTasks);
    },
    [filterBy, searchBy, tasks]
  );

  return (
    <section
      className={`${
        isOpen || isSideOpen ? "blur-sm" : ""
      } w-full max-h-screen overflow-y-auto`}
      onClick={isOpen ? handleSidebar : isSideOpen ? handleNavbar : undefined}
    >
      <div className="py-10 px-10">
        {/* if mobile responsive  */}
        {!isOpen && (
          <div className="flex justify-between lg:hidden mb-5 items-center shadow-md py-2 px-3">
            <GiHamburgerMenu
              className="text-3xl cursor-pointer"
              onClick={handleSidebar}
            />
            <Article isInclude={false} onClick={handleNavbar} />
          </div>
        )}
        {/* header section  */}
        <div className="flex justify-between">
          <div className="space-y-[2px]">
            <p className="text-2xl font-semibold text-stone-800">
              {filterBy.slice(0, 1).toUpperCase() + filterBy.slice(1)}
            </p>
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
        {filterTasks?.length > 0 && (
          <div className="mt-5 space-y-5">
            {filterTasks?.length > 0 &&
              filterTasks?.map((task) => (
                <TaskItem
                  key={task.id}
                  {...task}
                  onClick={handleFavorite}
                  onChanged={handleCompleted}
                />
              ))}
          </div>
        )}
        {filterTasks.length === 0 && (
          <div className="flex justify-center items-center p-20">
            <p className="sm:text-3xl text-xl font-bold text-center">
              😢 You have not any task in this{" "}
              <span className="italic text-red-300">{filterBy}</span> tag!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Main;
