import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ imagesurls, direction }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction ==='left'? "0":"-100%"}}
        animate={{ x: direction ==='left'? "-100%":"0" }}
        transition={{repeat:Infinity,ease:"linear", duration:15}}
        className="flex items-center w-full py-8 pr-40 gap-20 flex-shrink-0"
      >
        {imagesurls.map((url) => (
          <img src={url} className="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction ==='left'? "0":"-100%"}}
        animate={{ x: direction ==='left'? "-100%":"0" }}
        transition={{repeat:Infinity,ease:"linear", duration:15}}
        className="flex items-center w-full py-8 pr-40 gap-20 flex-shrink-0"
      >
        {imagesurls.map((url) => (
          <img src={url} className="" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
