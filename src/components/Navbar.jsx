import { CgDarkMode } from "react-icons/cg";
import { FaGithub, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
import ShamitaDeogadelogo from "../assets/ShamitaDeogadelogo.jpg";

const Navbar = ({ setDarkMode, darkMode }) => {
  return (
    <nav className=" px-9 mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="h-10 w-10 rounded"
          src={ShamitaDeogadelogo}
          alt="profilepic"
        />
        <h1 className="text-white font-bold animate-pulse text-3xl mx-2 w-10">
          Shamita
        </h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagramSquare />
        <FaTwitterSquare />
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
