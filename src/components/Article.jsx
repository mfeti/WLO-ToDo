/* eslint-disable react/prop-types */
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import Me from "../assets/Umagic.jpg";
function Article({ isInclude = true }) {
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex gap-2 items-center">
        {/* avatar  */}
        <div
          className={`${
            isInclude ? "w-12 h-12" : "w-10 h-10"
          } bg-blue-500 rounded-full`}
        >
          <img
            src={Me}
            alt="Mohammed Ahemd"
            className={`${
              isInclude ? "w-12 h-12" : "w-10 h-10"
            } p-[2px] rounded-full object-cover`}
          />
        </div>
        {isInclude && (
          <div className="">
            <p className="font-semibold text-xl">Mohammed Ahmed</p>
            <p className="text-gray-500">mfeticode@gmail.com</p>
          </div>
        )}
      </div>
      {/* icons section  */}
      <div className="text-blue-500 flex gap-4">
        <IoIosNotificationsOutline className="text-3xl cursor-pointer" />
        <IoSettingsOutline className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
}

export default Article;
