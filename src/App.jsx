import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { Navbar, Main, Sidebar } from "./components";

export default function App() {
  useEffect(function () {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="grid grid-cols-4 ">
      <Navbar />

      <Main />
      <Sidebar />
    </div>
  );
}
