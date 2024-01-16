import { motion } from "framer-motion";
import React from "react";

const MyImage = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    },
  };
  return (
    <motion.div className="relative xl:w-[400px] xl:h-[320px] lg:w-[350px] lg:h-[270px] h-[300px] w-[230px]">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 300 300"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="150"
          cy="150"
          r="140"
          stroke="#E26310"
          strokeWidth="5"
          fill="transparent"
          variants={draw}
        />
      </motion.svg>
      <motion.img
        src="/me.jpg"
        alt="Your Image"
        className="overflow-hidden absolute xl:top-[20px] xl:left-[60px] xl:w-[280px] xl:h-[280px] lg:top-[15px] lg:left-[55px] lg:w-[240px] lg:h-[240px] object-cover rounded-full top-[50px] left-[15px] w-[200px] h-[200px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
    </motion.div>
  );
};

export default MyImage;
