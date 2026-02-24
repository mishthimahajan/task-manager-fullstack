import { useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-2xl font-bold text-indigo-600">
        Task Manager Pro 🚀
      </h1>

      <button
        onClick={toggleDark}
        className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
      >
        🌙 Dark Mode
      </button>
    </div>
  );
};

export default Navbar;