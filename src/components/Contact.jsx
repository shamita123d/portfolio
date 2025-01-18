import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { MdLocationPin } from "react-icons/md";
import { SiGmail } from "react-icons/si";
export default function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.0 }}
        className="my-10 text-center text-4xl"
      >
        Contact
        <span className="text-neutral-500">Us</span>
      </motion.h2>

      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 flex items-center justify-center space-x-2"
        >
          <MdLocationPin className="text-yellow-500 text-2xl" />
          <span>{CONTACT.address}</span>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 flex items-center justify-center space-x-2"
        >
          <a
            href="mailto:shamitadeogade93@gmail.com"
            className="flex items-center "
          >
            <SiGmail className="text-blue-500 text-2xl mr-2" />
            <span>{CONTACT.email}</span>
          </a>
        </motion.p>
      </div>
    </div>
  );
}
