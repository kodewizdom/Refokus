import React from "react";

const Work = () => {
  var images = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "62%",
      left: "51%",
      isActive: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "68%",
      left: "47.5%",
      isActive: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "53.7%",
      left: "54.5%",
      isActive: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "70%",
      left: "51%",
      isActive: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "62%",
      left: "56%",
      isActive: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "58.2%",
      left: "49.5%",
      isActive: true,
    },
  ];

  return (
    <div className="w-full bg-zinc-900">
      <div className="relative max-w-screen-xl mx-auto text-center select-none pt-4">
        <h1 className="text-[40vw] leading-none font-medium">work</h1>
        <div className="absolute -top-3 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className=" absolute w-[18rem] rounded-md -translate-x-[50%] -translate-y-[50%] "
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                  alt={`Image ${index}`}
                />
              )
          )}
        </div>
        <h1 className="text-zinc-400 text-lg">Web Design, Webflow Development, Creative Development</h1>
      </div>
      
    </div>
  );
};

export default Work;
