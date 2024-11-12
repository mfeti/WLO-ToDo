/* eslint-disable react/prop-types */
import { FaRegCheckCircle, FaRegUserCircle, FaSearch } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import { IoWallet } from "react-icons/io5";
import { MdAssignmentAdd } from "react-icons/md";
import { PiCirclesFourBold } from "react-icons/pi";
import { RiErrorWarningLine } from "react-icons/ri";
import { SiContentstack, SiStudio3T } from "react-icons/si";
import { SlEnergy } from "react-icons/sl";
import Article from "./Article";

function Navbar({ isOpen }) {
  return (
    <section
      data-aos="fade-right"
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
              <div className="flex justify-between hover:bg-blue-100 p-3 rounded-lg transition-all duration-300">
                <div className="flex gap-2 items-center">
                  <SlEnergy className="text-blue-500 w-7 h-7" />
                  <p className="font-semibold text-xl text-gray-700">MyDay</p>
                </div>
                <div className="flex justify-center items-center bg-gray-300 text-sm px-3 py-1 rounded-full">
                  <span>8</span>
                </div>
              </div>
              {/* important  */}
              <div className="flex justify-between hover:bg-blue-100 p-3 rounded-lg transition-all duration-300">
                <div className="flex gap-2 items-center">
                  <RiErrorWarningLine className="text-blue-500 w-7 h-7" />
                  <p className="font-semibold text-xl text-gray-700">
                    Important
                  </p>
                </div>
                {/* <div className="flex justify-center items-center bg-gray-300 px-3 py-1 text-sm rounded-full">
                  <span>5</span>
                  <CiCircleCheck />
                </div> */}
              </div>
              {/* personal  */}
              <div className="flex justify-between hover:bg-blue-100 p-3 rounded-lg transition-all duration-300">
                <div className="flex gap-2 items-center">
                  <FaRegUserCircle className="text-blue-500 w-7 h-7" />
                  <p className="font-semibold text-xl text-gray-700">
                    Personal
                  </p>
                </div>
                <div className="flex justify-center items-center bg-gray-300 px-3 py-1 text-sm rounded-full">
                  <span>3</span>
                </div>
              </div>
              {/* All  */}
              <div className="flex justify-between hover:bg-blue-100 p-3 rounded-lg transition-all duration-300">
                <div className="flex gap-2 items-center">
                  <PiCirclesFourBold className="text-blue-500 w-7 h-7" />
                  <p className="font-semibold text-xl text-gray-700">All</p>
                </div>
                <div className="flex justify-center items-center bg-gray-300 px-3 py-1 text-sm rounded-full">
                  <span>52</span>
                </div>
              </div>
              {/* completed  */}
              <div className="flex justify-between hover:bg-blue-100 p-3 rounded-lg transition-all duration-300">
                <div className="flex gap-2 items-center">
                  <FaRegCheckCircle className="text-blue-500 w-7 h-7" />
                  <p className="font-semibold text-xl text-gray-700">
                    Completed
                  </p>
                </div>
                <div className="flex justify-center items-center bg-gray-300 px-3 py-1 text-sm rounded-full">
                  <span>5</span>
                </div>
              </div>
              {/* All  */}
              <div className="flex justify-between hover:bg-blue-100 p-3 rounded-lg transition-all duration-300">
                <div className="flex gap-2 items-center">
                  <MdAssignmentAdd className="text-blue-500 w-7 h-7" />
                  <p className="font-semibold text-xl text-gray-700">
                    Assign to me
                  </p>
                </div>
                <div className="flex justify-center items-center bg-gray-300 px-3 py-1 text-sm rounded-full">
                  <span>11</span>
                </div>
              </div>
            </div>
          </div>

          {/* tags section  */}
          <div className="">
            <p className="font-semibold text-gray-500">Your own tags</p>
            <div className="mt-5 space-y-6">
              {/* Go pay  */}
              <div className="flex justify-between hover:bg-blue-100 p-3 rounded-lg transition-all duration-300">
                <div className="flex gap-2 items-center">
                  <IoWallet className="text-blue-500 w-7 h-7" />
                  <p className="font-semibold text-xl text-gray-700">GoPay</p>
                </div>
                <div className="flex justify-center items-center bg-gray-300 text-sm px-3 py-1 rounded-full">
                  <span>8</span>
                </div>
              </div>
              {/* Kretya studio */}
              <div className="flex justify-between hover:bg-blue-100 p-3 rounded-lg transition-all duration-300">
                <div className="flex gap-2 items-center">
                  <SiStudio3T className="text-blue-500 w-7 h-7" />
                  <p className="font-semibold text-xl text-gray-700">
                    Kretya studio
                  </p>
                </div>
                <div className="flex justify-center items-center bg-gray-300 px-3 py-1 text-sm rounded-full">
                  <span>5</span>
                </div>
              </div>
              {/* Content Dump  */}
              <div className="flex justify-between hover:bg-blue-100 p-3 rounded-lg transition-all duration-300">
                <div className="flex gap-2 items-center">
                  <SiContentstack className="text-blue-500 w-7 h-7" />
                  <p className="font-semibold text-xl text-gray-700">
                    Content Dump
                  </p>
                </div>
                <div className="flex justify-center items-center bg-gray-300 px-3 py-1 text-sm rounded-full">
                  <span>3</span>
                </div>
              </div>
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
