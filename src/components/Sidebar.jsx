/* eslint-disable react/prop-types */
import { IoSettingsOutline } from "react-icons/io5";
import Me from "../assets/Umagic.jpg";
import { IoIosNotificationsOutline } from "react-icons/io";
import TaskItem from "./TaskItem";
function Sidebar({ completedTasks }) {
  console.log(completedTasks);
  return (
    <section className="bg-gray-100 min-w-[380px] min-h-screen block">
      <div className="mx-4 my-10">
        {/* top section  */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            {/* avatar  */}
            <div className="bg-blue-500 w-12 h-12 rounded-full">
              <img
                src={Me}
                alt="Mohammed Ahemd"
                className="w-12 h-12 p-[2px] rounded-full object-cover"
              />
            </div>
            <div className="">
              <p className="font-semibold text-xl">Mohammed Ahmed</p>
              <p className="text-gray-500">mfeticode@gmail.com</p>
            </div>
          </div>
          {/* icons section  */}
          <div className="text-blue-500 flex gap-4">
            <IoIosNotificationsOutline className="text-3xl cursor-pointer" />
            <IoSettingsOutline className="text-2xl cursor-pointer" />
          </div>
        </div>
        {/* Date section  */}
        <div className="mt-5">
          {/* title section*/}
          <div className="">
            <p className="font-semibold text-xl">Completed task</p>
          </div>
          {/* list section  */}
          <div className="mt-5 space-y-5">
            {completedTasks?.length > 0 &&
              completedTasks.map((task) => (
                <TaskItem key={task.id} {...task} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
