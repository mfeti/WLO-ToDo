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
// ];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(function () {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const handleTaskCreate = () => {
    setIsOpen((prev) => !prev);
  };

  const addTask = (newTask) => {
    if (!newTask) return;
    setTasks((prev) => [...prev, newTask]);
    console.log(newTask);
  };

  return (
    <div className="flex justify-between relative">
      <Navbar />
      <Main
        handleTaskCreate={handleTaskCreate}
        tasks={tasks}
        setTasks={setTasks}
      />
      <Sidebar />
      {isOpen && (
        <NewTaskForm handleTaskCreate={handleTaskCreate} addTask={addTask} />
      )}
    </div>
  );
}
