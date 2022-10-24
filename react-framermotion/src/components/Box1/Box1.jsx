import React from "react";
import { motion } from "framer-motion";

const Box1 = () => {
  const [isAnimating, setIsAnimating] = React.useState(false);

  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: isAnimating ? 1000 : 0,
          opacity: isAnimating ? 1 : 0.5,
          rotate: isAnimating ? 360 : 0,
        }}
        initial={{ opacity: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 60,
        }}
        onClick={() => setIsAnimating((prevState) => !prevState)}
      ></motion.div>
    </div>
  );
};

export default Box1;
