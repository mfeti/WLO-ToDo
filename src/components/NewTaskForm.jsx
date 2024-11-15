/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import CreatableSelect from "react-select/creatable";

function NewTaskForm({ handleTaskCreate, addTask, tags }) {
  const [title, setTitle] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      tag: selectedOption.value,
      createdAt: new Date(),
      id: Date.now(),
      isCompleted: false,
      isFavorite: false,
    };
    addTask(newTask);
    handleTaskCreate();
  };

  return (
    <div className="absolute top-0 w-full z-[999] backdrop-blur-sm h-screen">
      <div
        className="bg-gray-100 w-[300px] h-[300px] shadow-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-xl p-6
      "
      >
        {/* header section  */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-2xl">Create Task</p>
          <span className="p-1 bg-pink-300 rounded-full">
            <FaX
              className="hover:text-red-500 text-gray-800 text-sm transition-all duration-300 cursor-pointer"
              onClick={handleTaskCreate}
            />
          </span>
        </div>
        {/* form section  */}
        <div className="mt-5">
          <form action="">
            <div className="space-y-1 flex items-center gap-2">
              <label htmlFor="title" className="w-1/6 text-lg font-medium">
                Title:
              </label>
              <input
                id="title"
                type="text"
                placeholder="Enter title ..."
                className="px-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none hover:shadow-sm focus:border-2 focus:border-blue-500"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 my-5 cursor-pointer">
              <label htmlFor="title" className="text-lg font-medium w-1/6">
                Tag:
              </label>
              <CreatableSelect
                isClearable
                className="w-full"
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={tags}
              />
            </div>
            <div className="flex justify-between my-10">
              <button
                className="flex items-center px-4 py-2 bg-blue-100 text-blue-500 gap-2 rounded-xl hover:scale-105 transition-all duration-300 focus:ring focus:ring-blue-300 font-semibold"
                onClick={handleSubmit}
              >
                Create
              </button>
              <button
                className="flex items-center px-4 py-2 bg-gray-300 text-gray-700 gap-2 rounded-xl hover:scale-105 transition-all duration-300 focus:ring focus:ring-gray-300 font-semibold"
                onClick={handleTaskCreate}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewTaskForm;

// title: "👩‍💻 Promotion banner",
//     tag: "GoPay",
//     createdAt: "Mon Nov 11 2024",
//     isCompleted: false,
//     isFavorite: false,
