import { AiOutlinePlusCircle } from "react-icons/ai";
import { useAppContext } from "../state/context";
import { motion } from "framer-motion";
import { useState } from "react";

const colors = ["bg-red-400", "bg-orange-400", "bg-teal-400", "bg-green-400"];

const variantsUl = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const AddNote = () => {
  const context = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleColor = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="md:mb-20 mb-12"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <AiOutlinePlusCircle
          onClick={toggleColor}
          className="w-10 h-10 cursor-pointer"
        />
      </motion.div>

      <motion.ul initial={false} variants={variantsUl} animate={isOpen ? "open" : "closed"}>
        {colors.map((color, index) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            variants={variantsLi}
            onClick={() => context.toggleModal(color)}
            key={index}
            className={`${color} h-5 w-5 rounded-full mb-5`}
          ></motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
