import React from "react";
import { aboutus } from "../utils/data";

const About = () => {
  return (
    <div className="flex items-center justify-center gap-4 h-[50vh] px-24">
      {aboutus.map((i) => (
        <div className="flex w-1/3 h-[25vh] items-center p-2 gap-2 ">
          <div className="flex relative w-1/3 h-full">
            <img
              src={i.img}
              alt=""
              className="h-[20vh] object-cover z-10 w-full"
            />
            <div className="absolute bottom-2 left-0 h-4/5 w-full bg-slate-200/85 rounded-xl"></div>
          </div>
          <div className="flex flex-col gap-2 w-2/3 h-full justify-center">
            <h2 className="text-sm font-semibold">{i.title}</h2>
            <p className="text-sm font-thin">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            </p>
            <span className="text-xs cursor-pointer">Read more</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
