import React from "react";

const Info = () => {
  return (
    <div className="flex flex-col gap-4 w-1/4 px-6">
      <h1 className="text-3xl font-bold">Crafted with excellent material.</h1>
      <p className="text-sm text-slate-600 font-thin leading-8">
        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
        Aliquam vulputate velit imperdiet dolor tempor tristique.
      </p>
      <button className="rounded-full w-2/4 px-4 py-3 text-sm font-semibold bg-darkgrey text-white ">
        EXPLORE
      </button>
    </div>
  );
};

export default Info;
