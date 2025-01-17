import { motion } from "framer-motion";
import profilePic from "../assets/ShamitaDeogadeprofile.png";
import { HERO_CONTENT } from "../constants";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
export default function Hero() {
  return (
    <div className="p-5 border-b border-neutral-900 pb-4 lg: px-9 mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight 
                        text-transparent"
            >
              Hi I'm
            </motion.span>
            <motion.h1
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight
                        lg:mt-16 lg:text-7xl 
                       "
            >
              Shamita Deogade
            </motion.h1>
            <motion.span
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight 
                        text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light 
                       tracking-tighter"
            >
              {HERO_CONTENT}{" "}
            </motion.p>
            <a
              href="/Resume.pdf" // Path to resume in the public folder
              download
              className="mt-5 px-5 py-2 bg-cyan-500 text-white rounded-md"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-80 h-99 rounded-2xl"
              src={profilePic}
              alt="profilepic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
