import React from "react";
import { motion } from "framer-motion";

const Stripe = ({ val }) => {
  return (
    <div className="">
      <motion.div
        initial={{ translateX: "0" }}
        animate={{ translateX: "-300%" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex flex-row "
      >
        <div className="w-[320px] h-[74px] px-[24px] py-[40px] border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between items-center">
          <img
            className=""
            src={val.url}
            style={{ width: `${val.width}px`, height: `${val.height}px` }}
          />
          <span>{val.number}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Stripe;
