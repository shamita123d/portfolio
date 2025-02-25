import { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdClose, MdLightMode, MdMenu } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import ShamitaDeogadelogo from "../assets/ShamitaDeogadelogo.jpg";

const Navbar = ({ setDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-6 mb-4 flex items-center justify-between relative">
      {/* Profile Picture and Name */}
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

      {/* Hamburger Menu for Small Screens */}
      <div className="lg:hidden flex items-center">
        <button
          className="text-white p-2 rounded-full"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <MdLightMode /> : <CgDarkMode />}
        </button>
        <button
          className="text-white p-2 ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <MdClose className="text-2xl" />
          ) : (
            <MdMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 right-6 bg-gray-800 p-4 rounded-lg flex flex-col items-center gap-4 lg:hidden">
          <a
            href="https://www.linkedin.com/in/shamitadeogade/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/shamita123d"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/shamita_deogade/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 text-white"
          >
            <SiLeetcode />
          </a>
        </div>
      )}

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
