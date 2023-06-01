import { AiOutlinePlusCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";
import { Circle } from "./Circle";

const colors = ["bg-red-400", "bg-orange-400", "bg-teal-400", "bg-green-400"];

const variantsUl = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};


export const AddNote = () => {
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
        {colors.map((color, index) => <Circle key={index} color={color} />)}
      </motion.ul>
    </div>
  );
};
