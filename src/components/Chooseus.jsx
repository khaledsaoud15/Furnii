import React from "react";
import { items } from "../utils/data";
import header from "../images/why-choose-us-img.jpg";
import dots from "../images/dots-yellow.svg";

const Chooseus = () => {
  return (
    <section className="flex h-screen w-full px-20 items-center gap-[6rem]">
      <div className="flex flex-col gap-10 h-4/5 w-2/4 ">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">Why Choose Us</h1>
          <p className="text-base text-gray-500 font-thin w-[95%]">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
        </div>
        <div className="grid grid-cols-2 w-full h-auto gap-4">
          {items.map((i) => (
            <div className="flex flex-col gap-3 w-full h-auto">
              <div className="w-12 h-12 relative">
                <img src={i.icon} alt="" className="w-full h-full" />
                <div className="w-8 h-8 bg-gray-400/55 rounded-full absolute -bottom-0 -right-3 -z-10"></div>
              </div>
              <h1 className="text-sm font-semibold">{i.title}</h1>
              <p className="text-sm text-gray-500 w-4/5">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[40%] h-5/5 relative">
        <img
          src={header}
          alt=""
          className="w-full h-full object-cover rounded-[30px]"
        />
        <img src={dots} alt="" className="absolute -top-20 -left-[25%] -z-10" />
      </div>
    </section>
  );
};

export default Chooseus;
