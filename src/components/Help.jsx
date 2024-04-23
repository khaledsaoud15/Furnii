import sofa from "../images/img-grid-1.jpg";
import light from "../images/img-grid-2.jpg";
import chair from "../images/img-grid-3.jpg";
import dots from "../images/dots-green.svg";

const Help = () => {
  const text = [
    "Donec vitae odio quis nisl dapibus malesuada",
    "Donec vitae odio quis nisl dapibus malesuada",
    "Donec vitae odio quis nisl dapibus malesuada",
    "Donec vitae odio quis nisl dapibus malesuada",
  ];
  return (
    <section className="h-screen w-full flex items-center gap-[5rem] px-20 mt-24">
      <div className="relative grid w-3/4 h-4/5 grid-cols-3 grid-rows-3 gap-4">
        <img
          src={sofa}
          alt=""
          className="w-full h-full object-cover col-span-2 row-span-3 rounded-3xl"
        />
        <img
          src={light}
          alt=""
          className="w-full h-full object-cover col-span-1 row-span-1 rounded-3xl"
        />
        <img
          src={chair}
          alt=""
          className="absolute top-[35%] right-0 object-cover w-2/4 h-4/5 rounded-3xl"
        />
        <img
          src={dots}
          alt=""
          className="absolute -top-20 -left-20 object-cover -z-10"
        />
      </div>

      <div className="flex flex-col gap-4 w-2/4 h-4/5">
        <h1 className="text-4xl font-semibold">
          We Help You Make Modern Interior Design
        </h1>
        <p className="text-sm text-gray-500 leading-7	">
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
          nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
          velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
          tristique senectus et netus et malesuada
        </p>
        <div className="grid w-full grid-cols-2 gap-4 mt-4">
          {text.map((t) => (
            <div className="flex gap-2 w-full h-auto">
              <div className="w-2 h-2  border-2 bg-white rounded-full border-gray-600 mt-3"></div>
              <p className="text-base text-gray-500 font-thin">{t}</p>
            </div>
          ))}
        </div>
        <button className="rounded-full w-1/4 px-4 py-3 text-sm font-semibold bg-darkgrey text-white ">
          EXPLORE
        </button>
      </div>
    </section>
  );
};

export default Help;
