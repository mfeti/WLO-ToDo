/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { dateConverter } from "../constants";

function TaskItem({
  isFavorite,
  id,
  onClick,
  title,
  isCompleted,
  tag,
  createdAt,
  onChanged,
}) {
  return (
    <div className="flex justify-between items-center">
      {/* left side  */}
      <div className="flex gap-5 items-center">
        <input
          type="checkbox"
          className="w-4 h-4 "
          onChange={() => onChanged(id)}
          checked={isCompleted}
        />
        <div className={`${isCompleted ? "" : ""}`}>
          <p
            className={`${
              isCompleted ? "line-through text-gray-600" : ""
            } font-semibold`}
          >
            {title}
          </p>
          <p className="text-gray-600 flex gap-3">
            <span>{tag}</span>
            <span className="text-gray-400 font-bold text-3xl relative">
              <span className="absolute -top-1/2 ">.</span>
            </span>
            <span className="text-blue-500">{dateConverter(createdAt)}</span>
          </p>
        </div>
      </div>
      {/* right side  */}
      <div className="">
        <FaStar
          className={`${
            isFavorite ? "text-blue-500" : "text-gray-300"
          } w-6 h-6 cursor-pointer`}
          onClick={(e) => {
            e.preventDefault();
            onClick(id);
          }}
        />
      </div>
    </div>
  );
}

export default TaskItem;
