/* eslint-disable react/prop-types */
import TaskItem from "./TaskItem";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import { months } from "../constants";
import Article from "./Article";

function Sidebar({
  completedTasks,
  handleCompleted,
  handleFavorite,
  isSideOpen,
}) {
  const [filterDate, setFilterDate] = useState(new Date());
  const newCompletedTasks = completedTasks.filter(
    (task) =>
      new Date(task.completedAt).getDate() === new Date(filterDate).getDate()
  );
  const date = new Date(filterDate);
  const [dates, month, year] = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
  ];

  return (
    <section
      className={`bg-gray-100 min-w-[380px] min-h-screen ${
        isSideOpen ? "block" : "xl:block hidden"
      }`}
    >
      <div className="mx-4 my-10">
        {/* top section  */}
        <Article />
        {/* Date section  */}
        <div className="mt-5">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              defaultValue={dayjs(filterDate)}
              maxDate={dayjs(new Date())}
              onChange={(e) => {
                setFilterDate(e.$d);
              }}
              sx={{
                bgcolor: "transparent",
                fontSize: "",
              }}
            />
          </LocalizationProvider>
        </div>

        {/* completed tasks  */}
        <div className="mt-12">
          {/* title section*/}
          <div className="">
            <p className="font-semibold text-xl">Completed task</p>
          </div>
          {/* list section  */}
          {newCompletedTasks?.length > 0 ? (
            <div className="mt-5 space-y-5">
              {newCompletedTasks?.length > 0 &&
                newCompletedTasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    {...task}
                    onClick={handleFavorite}
                    onChanged={handleCompleted}
                  />
                ))}
            </div>
          ) : (
            <p className="mt-5 font-semibold text-xl text-gray-400 text-center">
              <span className="block">😢 </span>
              Sry you have not completed task on{" "}
              <span className="text-red-300">
                {months[month].slice(0, 3)} {dates} {year}
              </span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
