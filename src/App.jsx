import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Navbar, Main, Sidebar, NewTaskForm } from "./components";

// const tempTasks = [
//   {
//     id: "001",
//     title: "👩‍💻 Promotion banner",
//     tag: "GoPay",
//     createdAt: "Mon Nov 11 2024",
//     isCompleted: false,
//     isFavorite: false,
//   },
//   {
//     id: "002",
//     title: "🚀 Astronomer deal",
//     tag: "Content dump",
//     createdAt: "Mon Nov 1 2024",
//     isCompleted: false,
//     isFavorite: false,
//   },
//   {
//     id: "003",
//     title: "👨‍⚕️ Hospital appointment",
//     tag: "Personal",
//     createdAt: "Mon Nov 10 2024",
//     isCompleted: false,
//     isFavorite: true,
//   },
//   {
//     id: "004",
//     title: "🛏 Take rest",
//     tag: "GoPay",
//     createdAt: "Mon Nov 11 2024",
//     isCompleted: false,
//     isFavorite: false,
//     completedAt: "Nov 9 2024",
//   },
// ];

// const tempCompletedTasks = [
//   {
//     id: "001",
//     title: "🛏 Take rest",
//     tag: "GoPay",
//     createdAt: "Mon Nov 11 2024",
//     isCompleted: true,
//     isFavorite: false,
//     completedAt: "Nov 9 2024",
//   },
//   {
//     id: "002",
//     title: "🤸‍♂️ Go to gym",
//     tag: "Content dump",
//     createdAt: "Mon Nov 11 2024",
//     isCompleted: true,
//     isFavorite: false,
//     completedAt: "Nov 11 2024",
//   },
//   {
//     id: "003",
//     title: "🧂 take meal",
//     tag: "Personal",
//     createdAt: "Mon Nov 10 2024",
//     isCompleted: true,
//     isFavorite: true,
//     completedAt: "Nov 12 2024",
//   },
// ];

export default function App() {
  const [isPopup, setIsPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(function () {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(
    function () {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    [tasks]
  );

  const handleTaskCreate = () => {
    setIsPopup((prev) => !prev);
  };

  const handleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavbar = () => {
    setIsSideOpen((prev) => !prev);
  };

  const addTask = (newTask) => {
    if (!newTask) return;
    setTasks((prev) => [...prev, newTask]);
  };

  const handleCompleted = (id) => {
    if (!id) return;

    const newTasks = tasks.map((task) => {
      return task.id === id
        ? { ...task, isCompleted: !task.isCompleted }
        : { ...task };
    });
    setTasks(newTasks);

    //make uncompleted
    if (completedTasks.find((task) => id === task.id) !== undefined) {
      setCompletedTasks(completedTasks.filter((task) => task.id !== id));
      return;
    }

    //make completed
    const [completedTask] = newTasks.filter((task) => task.id === id);
    setCompletedTasks((prev) => [
      ...prev,
      { ...completedTask, completedAt: new Date() },
    ]);

    // setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleFavorite = (id) => {
    if (id === undefined) return;
    const newTasks = tasks.map((task) => {
      return task.id === id && !task.isCompleted
        ? { ...task, isFavorite: !task.isFavorite }
        : { ...task };
    });
    setTasks(newTasks);
  };

  return (
    <div className="flex justify-between relative overflow-hidden">
      <Navbar isOpen={isOpen} />
      <Main
        handleTaskCreate={handleTaskCreate}
        tasks={tasks}
        setTasks={setTasks}
        handleCompleted={handleCompleted}
        handleFavorite={handleFavorite}
        handleSidebar={handleSidebar}
        isOpen={isOpen}
        isSideOpen={isSideOpen}
        handleNavbar={handleNavbar}
      />
      <Sidebar
        completedTasks={completedTasks}
        handleCompleted={handleCompleted}
        handleFavorite={handleFavorite}
        isSideOpen={isSideOpen}
      />
      {isPopup && (
        <NewTaskForm handleTaskCreate={handleTaskCreate} addTask={addTask} />
      )}
    </div>
  );
}
