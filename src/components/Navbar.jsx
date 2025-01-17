import { CgDarkMode } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import ShamitaDeogadelogo from "../assets/ShamitaDeogadelogo.jpg";
import { MdLightMode } from "react-icons/md";

const Navbar = ({ setDarkMode, darkMode }) => {
  return (
    <nav className="px-6 mb-4 flex flex-wrap items-center lg:justify-between ">
      {/* Profile Picture and Name */}
      <div className="flex items-center justify-between w-full lg:w-auto mt-6 lg:mt-0">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded"
            src={ShamitaDeogadelogo}
            alt="profilepic"
          />
          <h1 className="text-white font-bold animate-pulse text-2xl mx-2">
            Shamita
          </h1>
        </div>
        {/* Dark Mode Button (Mobile View) */}
        <button
          className="text-white p-2 rounded-full lg:hidden"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <MdLightMode /> : <CgDarkMode />}
        </button>
      </div>

      {/* Icons and Dark Mode Button (Large Screen) */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl hidden lg:flex">
        <a
          href="https://www.linkedin.com/in/shamitadeogade/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/shamita123d"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/shamita_deogade/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          <SiLeetcode />
        </a>
        <button
          className="text-white p-2 rounded-full"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <MdLightMode /> : <CgDarkMode />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
