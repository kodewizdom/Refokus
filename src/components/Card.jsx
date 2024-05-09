import React from "react";
import { CgArrowRight } from "react-icons/cg";

const Card = ({ width, start, para }) => {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl hover:bg-violet-600 ${width} min-h-[27rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>Up Next: News</h3>
          <CgArrowRight />
        </div>
        <h1 className="text-3xl mt-10 font-medium">
          Insights and behind the scenes
        </h1>
      </div>
      <div className="down w-full ">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-700 font-medium">
            Explore what drives our team.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
