import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="bg-zinc-900 w-full">
      <div className="max-w-screen-xl mx-auto pt-20 gap-1 flex">
        <Card width={"basis-1/3"} start={false} para={true}/>
        <Card width={"basis-2/3"} start={true} para={false}/>
      </div>
    </div>
  );
};

export default Cards;
