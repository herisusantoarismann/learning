import React from "react";
import { motion } from "framer-motion";

const Box2 = () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{ right: 5, left: -5, top: 2, bottom: 2 }}
      ></motion.div>
    </div>
  );
};

export default Box2;
