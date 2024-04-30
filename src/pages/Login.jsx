import sofa from "../images/sofa.png";
import dotsyellow from "../images/dots-yellow.svg";
import dots from "../images/dots-green.svg";

const Login = () => {
  return (
    <div className=" relative h-screen w-full flex items-center justify-center  overflow-hidden">

      <div className="flex flex-col w-1/4 h-auto shadow-xl p-4 rounded-lg gap-4 z-10 bg-white">
        <div className="flex flex-col gap-2 w-full h-auto">
          <input
            type="email"
            placeholder="Email"
            className="w-full py-2 px-4 border outline-none rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full py-2 px-4 border outline-none rounded-lg"
          />
          <button className="w-2/4 mx-auto py-2 text-sm bg-shadegreen text-white rounded-lg">
            Login
          </button>
        </div>
        <p className="text-center relative text-sm text-gray-800 font-thin before:absolute before:content-[''] before:right-[13%] before:top-2/4 before:w-1/3 before:h-[1px] before:bg-gray-300 after:absolute after:content-[''] after:left-[13%] after:top-2/4 after:w-1/3 after:h-[1px] after:bg-gray-300">
          or
        </p>
        <div className="flex  gap-4 w-full h-auto items-center justify-center">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AfKMLf4rKX7EqOSAVpujIQHaEK%26pid%3DApi&f=1&ipt=bdcca8f3dce0512de908514759b43902dec083928d3dd101af44adfdecbb50ac&ipo=images"
            alt=""
            className="w-8 h-8 object-cover rounded-full cursor-pointer"
          />
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cf4B8cGMSMMb5_y29UHvCwHaHa%26pid%3DApi&f=1&ipt=cf2fc826baa3c2089089f7d361111650224b9a6c6fd52f2c9f875ffd92703c6f&ipo=images"
            alt=""
            className="w-8 h-8 object-cover rounded-full cursor-pointer"
          />
        </div>
      </div>
      <img
        src={sofa}
        alt=""
        className="absolute top-[30%] left-[60%] object-cover"
      />
      <img
        src={dotsyellow}
        alt=""
        className="absolute -top-[5%] right-[80%] object-cover w-1/4"
      />
      <img src={dots} alt="" className="absolute bottom-16 left-[25%] w-1/4"/>
    </div>
  );
};

export default Login;
