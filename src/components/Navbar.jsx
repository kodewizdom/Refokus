import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl m-auto py-4 items-center flex justify-between">
      <div className="nleft flex items-center">
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" />
        <div className="links flex gap-16 ml-20">
          {["Home", "Work", "About", "News"].map((elem, index) => (
            <a
              key={index}
              className="text-base flex items-center gap-1"
              herf="#"
            >
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.25em #00FF19" }}
                  className="inline-block w-2 h-2 bg-green-500 rounded-full"
                ></span>
              )}
              {elem}
            </a>
          ))}
        </div>
      </div>
      <Button/>
    </div>
  );
};

export default Navbar;
