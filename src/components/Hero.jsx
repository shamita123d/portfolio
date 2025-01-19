import { motion } from "framer-motion";
// import profilePic from "../assets/ShamitaDeogadeprofile.png";
import { HERO_CONTENT } from "../constants";
// import FixedCircularDiv from "../components/FixedCircularDiv"
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
    <div className="p-5 border-b border-neutral-900 pb-4 lg:px-9 mb-3">
      <div className="flex flex-wrap justify-around lg:justify-between">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Hi I'm
            </motion.span>
            <motion.h1
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-gray-500 via-white to-blue-400 bg-clip-text text-4xl tracking-tight text-transparent pb-10 text-4xl font-bold tracking-tight lg:mt-10 lg:text-5xl pt-10 lg:pt-0"
            >
              Shamita Deogade
            </motion.h1>
            <motion.span
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.a
              variants={container(2.0)}
              initial="hidden"
              animate="visible"
              href="/Resume.pdf"
              download
              className="relative border-2 animate-pulse rounded border-white bg-transparent py-2.5 px-5 font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-300 before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100 dark:text-white dark:border-gray-700 dark:hover:text-gray-800 dark:bg-transparent dark:before:bg-gray-300"
            >
              Download Resume
            </motion.a>
          </div>
        </div>

        <motion.div
          whileInView={{ opacity: 2, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="mt-10 w-full lg:w-1/2 p-4 lg:p-8"
        >
          <div className="flex justify-center items-center my-10">
            <div className="relative w-80 h-80 rounded-full border-4 border-white bg-transparent py-2.5 px-5 font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-0 before:rounded-full before:bg-gray-300 before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-100 dark:text-white dark:border-gray-700 dark:hover:text-gray-800 dark:bg-transparent dark:before:bg-gray-300 flex justify-center items-center">
              <div className="text-center">
                <ul className="list-none space-y-2">
                  <li>HTML || CSS</li>
                  <li>JS || React</li>
                  <li>Angular || Java</li>
                  <li>Springboot || JDBC</li>
                  <li>Hibernate || DSA</li>
                  <li>C || C++</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* <div className="mt-10 w-full lg:w-1/2 p-4 lg:p-8 flex justify-center items-center">
          <FixedCircularDiv /> 
        </div>  */}
      </div>
    </div>
  );
}

