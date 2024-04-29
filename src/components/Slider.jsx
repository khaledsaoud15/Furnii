import person from "../images/person-1.jpg";
import arrow from "../images/next.svg";

const Slider = () => {
  return (
    <section className="relative flex flex-col h-screen px-24 w-full justify-center text-center gap-8">
      <h1 className="text-3xl font-semibold">Testimonials</h1>
      <p className="text-lg font-thin text-gray-600 w-3/5 mx-auto">
        “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
        nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit
        imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Integer
        convallis volutpat dui quis scelerisque.”
      </p>
      <div className="flex flex-col w-2/4 mx-auto h-auto gap-1">
        <img
          src={person}
          alt="person"
          className="w-20 h-auto object-cover rounded-full mx-auto"
        />
        <h1 className="text-base font-bold">Maria Jones</h1>
        <p className="text-sm font-thin">CEO, Co-Founder, XYZ Inc.</p>
      </div>
      <div className="w-12 h-12 p-4 rounded-full bg-gray-600/55 absolute flex items-center justify-center cursor-pointer">
        <img src={arrow} alt="" className="w-5 h-5 object-cover rotate-180" />
      </div>
      <div className="w-12 h-12 p-4 rounded-full bg-gray-600/55 absolute right-24 flex items-center justify-center cursor-pointer">
        <img src={arrow} alt="" className="w-5 h-5 object-cover " />
      </div>
      <div className="flex items-center  h-auto absolute bottom-12 left-2/4 -translate-x-2/4 gap-2">
        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </section>
  );
};

export default Slider;
