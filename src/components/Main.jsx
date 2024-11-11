import { FaPlus } from "react-icons/fa";
import { months } from "../constants";
import TaskItem from "./TaskItem";
import { useState } from "react";

const tempTasks = [
  {
    id: "001",
    title: "👩‍💻 Promotion banner",
    tag: "GoPay",
    createdAt: "Mon Nov 11 2024",
    isCompleted: false,
    isFavorite: false,
  },
  {
    id: "002",
    title: "🚀 Astronomer deal",
    tag: "Content dump",
    createdAt: "Mon Nov 1 2024",
    isCompleted: false,
    isFavorite: false,
  },
  {
    id: "003",
    title: "👨‍⚕️ Hospital appointment",
    tag: "Personal",
    createdAt: "Mon Nov 10 2024",
    isCompleted: false,
    isFavorite: true,
  },
];

function Main() {
  const [tasks, setTasks] = useState(tempTasks);
  const [completedTasks, setCompletedTasks] = useState([]);
  const now = new Date();

  const handleToggle = (id) => {
    if (id === undefined) return;
    const newTasks = tasks.map((task) => {
      return task.id === id
        ? { ...task, isFavorite: !task.isFavorite }
        : { ...task };
    });
    setTasks(newTasks);
  };

  const handleCompleted = (id) => {
    if (!id) return;
    const completedTask = tasks.filter((task) => task.id === id);
    setCompletedTasks((prev) => [...prev, completedTask]);
    const newTasks = tasks.map((task) => {
      return task.id === id
        ? { ...task, isCompleted: !task.isCompleted }
        : { ...task };
    });
    setTasks(newTasks);
    // setTasks(tasks.filter((task) => task.id !== id));
  };

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
          {tasks.length > 0 &&
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                {...task}
                onClick={handleToggle}
                onChanged={handleCompleted}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Main;
