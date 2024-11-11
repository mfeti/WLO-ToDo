import { FaPlus, FaRegStar, FaStar } from "react-icons/fa";
import { months, dateConverter } from "../constants";

function Main() {
  const now = new Date();
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
          <div className="flex justify-between items-center">
            {/* left side  */}
            <div className="flex gap-5 items-center">
              <input type="checkbox" className="w-4 h-4 " />
              <div className="">
                <p className="font-semibold">👩‍💻 Promotion banner</p>
                <p className="text-gray-600 flex gap-3">
                  <span>GoPay</span>
                  <span className="text-gray-400 font-bold text-3xl relative">
                    <span className="absolute -top-1/2 ">.</span>
                  </span>
                  <span className="text-blue-500">{dateConverter(now)}</span>
                </p>
              </div>
            </div>
            {/* right side  */}
            <div className="">
              <FaStar className="text-blue-500 w-6 h-6 cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            {/* left side  */}
            <div className="flex gap-5 items-center">
              <input type="checkbox" className="w-4 h-4 " />
              <div className="">
                <p className="font-semibold">👩‍💻 Promotion banner</p>
                <p className="text-gray-600 flex gap-3">
                  <span>GoPay</span>
                  <span className="text-gray-400 font-bold text-3xl relative">
                    <span className="absolute -top-1/2 ">.</span>
                  </span>
                  <span className="text-blue-500">
                    {dateConverter("Mon Nov 4 2024")}
                  </span>
                </p>
              </div>
            </div>
            {/* right side  */}
            <div className="">
              <FaRegStar className="text-blue-500 w-6 h-6 cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            {/* left side  */}
            <div className="flex gap-5 items-center">
              <input type="checkbox" className="w-4 h-4 " />
              <div className="">
                <p className="font-semibold">👩‍💻 Promotion banner</p>
                <p className="text-gray-600 flex gap-3">
                  <span>GoPay</span>
                  <span className="text-gray-400 font-bold text-3xl relative">
                    <span className="absolute -top-1/2 ">.</span>
                  </span>
                  <span className="text-blue-500">
                    {dateConverter("Mon Nov 10 2024")}
                  </span>
                </p>
              </div>
            </div>
            {/* right side  */}
            <div className="">
              <FaRegStar className="text-blue-500 w-6 h-6 cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            {/* left side  */}
            <div className="flex gap-5 items-center">
              <input type="checkbox" className="w-4 h-4 " />
              <div className="">
                <p className="font-semibold">👩‍💻 Promotion banner</p>
                <p className="text-gray-600 flex gap-3">
                  <span>GoPay</span>
                  <span className="text-gray-400 font-bold text-3xl relative">
                    <span className="absolute -top-1/2 ">.</span>
                  </span>
                  <span className="text-blue-500">
                    {dateConverter("Mon Nov 1 2024")}
                    {/* {days[day]}, {months[now.getMonth()].slice(0, 3)} {date} */}
                  </span>
                </p>
              </div>
            </div>
            {/* right side  */}
            <div className="">
              <FaStar className="text-blue-500 w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
