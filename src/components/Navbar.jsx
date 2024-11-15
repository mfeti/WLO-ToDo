/* eslint-disable react/prop-types */
import { FaRegCheckCircle, FaRegUserCircle, FaSearch } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import { MdAssignmentAdd } from "react-icons/md";
import { PiCirclesFourBold } from "react-icons/pi";
import { RiErrorWarningLine } from "react-icons/ri";
import { SlEnergy } from "react-icons/sl";
import Article from "./Article";
import { CgPentagonDown } from "react-icons/cg";

function Navbar({
  tags,
  isOpen,
  numTasks,
  importantTasks,
  myDayTasks,
  toMeTasks,
  personalTasks,
  completedTasks,
  handleFilterBy,
  filterBy,
}) {
  return (
    <section
      className={`bg-gray-100 min-w-[350px] ${
        isOpen ? "block relative" : "lg:block hidden"
      } min-h-screen`}
    >
      <div className={`mx-4 my-10 `}>
        <div className="space-y-6">
          {/* logo section  */}
          <div className="flex gap-2 items-center">
            <FcTodoList className="w-8 h-8 object-contain" />
            <span className="font-bold text-3xl text-gray-800">WLO-ToDo</span>
          </div>
          {/* Filter section  */}
          <div className="relative group">
            <input
              type="text"
              placeholder="Search"
              className="pl-7 pr-2 py-2 rounded-lg placeholder:text-gray-500 bg-gray-200 inline-block w-full focus:outline-none focus:ring focus:ring-blue-200 shadow-sm transition-all duration-200"
            />
            <FaSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 left-2 group-hover:text-blue-300 transition-all duration-200" />
          </div>
          {/* 🔖 Favorites section  */}
          <div className="py-10 border-b-2 ">
            <p className="font-semibold text-gray-500">Favorites</p>
            <div className="mt-5 space-y-6">
              {/* My day  */}
              <div
                className={`flex justify-between p-3 rounded-lg transition-all duration-300 ${
                  filterBy === "myday"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-100 text-gray-700"
                }`}
                onClick={() => handleFilterBy("myday")}
              >
                <div className="flex gap-2 items-center">
                  <SlEnergy
                    className={`${
                      filterBy === "myday" ? "text-white" : "text-blue-500"
                    }  w-7 h-7`}
                  />
                  <p className="font-semibold text-xl">MyDay</p>
                </div>
                {myDayTasks > 0 && (
                  <div className="flex justify-center items-center bg-gray-300 text-sm px-3 py-1 rounded-full text-gray-900">
                    <span>{myDayTasks}</span>
                  </div>
                )}
              </div>
              {/* important  */}
              <div
                className={`flex justify-between p-3 rounded-lg transition-all duration-300 ${
                  filterBy === "important"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-100 text-gray-700"
                }`}
                onClick={() => handleFilterBy("important")}
              >
                <div className="flex gap-2 items-center">
                  <RiErrorWarningLine
                    className={`${
                      filterBy === "important" ? "text-white" : "text-blue-500"
                    }  w-7 h-7`}
                  />
                  <p className="font-semibold text-xl">Important</p>
                </div>
                {importantTasks > 0 && (
                  <div className="flex justify-center items-center bg-gray-300 px-3 py-1 text-sm rounded-full text-gray-900">
                    <span>{importantTasks}</span>
                  </div>
                )}
              </div>
              {/* personal  */}
              <div
                className={`flex justify-between p-3 rounded-lg transition-all duration-300 ${
                  filterBy === "personal"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-100 text-gray-700"
                }`}
                onClick={() => handleFilterBy("personal")}
              >
                <div className="flex gap-2 items-center">
                  <FaRegUserCircle
                    className={`${
                      filterBy === "personal" ? "text-white" : "text-blue-500"
                    }  w-7 h-7`}
                  />
                  <p className="font-semibold text-xl">Personal</p>
                </div>
                {personalTasks > 0 && (
                  <div className="flex justify-center items-center bg-gray-300 px-3 py-1 text-sm rounded-full text-gray-900">
                    <span>{personalTasks}</span>
                  </div>
                )}
              </div>
              {/* All  */}
              <div
                className={`flex justify-between p-3 rounded-lg transition-all duration-300 ${
                  filterBy === "all"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-100 text-gray-700"
                }`}
                onClick={() => handleFilterBy("all")}
              >
                <div className="flex gap-2 items-center">
                  <PiCirclesFourBold
                    className={`${
                      filterBy === "all" ? "text-white" : "text-blue-500"
                    }  w-7 h-7`}
                  />
                  <p className="font-semibold text-xl">All</p>
                </div>
                {numTasks > 0 && (
                  <div className="flex justify-center items-center bg-gray-300 px-3 py-1 text-sm rounded-full text-gray-900">
                    <span>{numTasks}</span>
                  </div>
                )}
              </div>
              {/* completed  */}
              <div
                className={`flex justify-between p-3 rounded-lg transition-all duration-300 ${
                  filterBy === "completed"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-100 text-gray-700"
                }`}
                onClick={() => handleFilterBy("completed")}
              >
                <div className="flex gap-2 items-center">
                  <FaRegCheckCircle
                    className={`${
                      filterBy === "completed" ? "text-white" : "text-blue-500"
                    }  w-7 h-7`}
                  />
                  <p className="font-semibold text-xl">Completed</p>
                </div>
                {completedTasks > 0 && (
                  <div className="flex justify-center items-center bg-gray-300 px-3 py-1 text-sm rounded-full">
                    <span>{completedTasks}</span>
                  </div>
                )}
              </div>
              {/* Assign to me  */}
              <div
                className={`flex justify-between p-3 rounded-lg transition-all duration-300 ${
                  filterBy === "toMe"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-100 text-gray-700"
                }`}
                onClick={() => handleFilterBy("toMe")}
              >
                <div className="flex gap-2 items-center">
                  <MdAssignmentAdd
                    className={`${
                      filterBy === "toMe" ? "text-white" : "text-blue-500"
                    }  w-7 h-7`}
                  />
                  <p className="font-semibold text-xl">Assign to me</p>
                </div>
                {toMeTasks > 0 && (
                  <div className="flex justify-center items-center bg-gray-300 px-3 py-1 text-sm rounded-full text-gray-900">
                    <span>{toMeTasks}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* tags section  */}
          <div className="">
            <p className="font-semibold text-gray-500">Your own tags</p>
            <div className="mt-5 space-y-6">
              {/* Go pay  */}
              {tags.length > 0 &&
                tags.map((tag) => (
                  <div
                    key={tag.value}
                    className={`flex justify-between p-3 rounded-lg transition-all duration-300 ${
                      filterBy === tag.value
                        ? "bg-blue-500 text-white"
                        : "hover:bg-blue-100 text-gray-700"
                    }`}
                    onClick={() => handleFilterBy(tag.value)}
                  >
                    <div className="flex gap-2 items-center">
                      <CgPentagonDown
                        className={`${
                          filterBy === tag.value
                            ? "text-white"
                            : "text-blue-500"
                        }  w-7 h-7`}
                      />
                      <p className="font-semibold text-xl">{tag.label}</p>
                    </div>
                    <div className="flex justify-center items-center bg-gray-300 text-sm px-3 py-1 rounded-full text-gray-900">
                      <span>{tag.numTask}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="relative top-10 border-t-2 p-2">
            <Article isInclude={false} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Navbar;
