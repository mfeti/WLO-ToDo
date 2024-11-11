/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { dateConverter } from "../constants";

function TaskItem({ isFavorite, onClick }) {
  return (
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
        <FaStar
          className={`${
            isFavorite ? "text-blue-500" : "text-gray-300"
          } w-6 h-6 cursor-pointer`}
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default TaskItem;
