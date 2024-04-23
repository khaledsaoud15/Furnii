import couch from "../images/couch.png";
import dots from "../images/dots-light.svg";

const Header = () => {
  return (
    <header
      className="relative flex items-center  justify-between w-full h-[80vh] bg-shadegreen px-24 bg-no-repeat bg-[98%_10%]  "
      style={{
        backgroundImage: `url(${dots})`,
      }}
    >
      <div className="flex flex-col gap-8 w-1/3 h-auto">
        <h1 className="text-5xl font-bold text-white">
          Modern Interior Design Studio
        </h1>
        <p className="text-gray-300 font-thin text-sm">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <div className="flex items-center justify-between w-3/4 gap-4">
          <button className="bg-limeyellow py-3  w-2/4 text-gray-600 rounded-full font-bold ">
            SHOP NOW
          </button>
          <button className="bg-transparent py-3  w-2/4 text-white rounded-full border font-bold ">
            EXPLORE{" "}
          </button>
        </div>
      </div>
      <img
        src={couch}
        alt=""
        className="absolute -top-5 right-5 object-cover -z-0  "
      />
    </header>
  );
};

export default Header;
