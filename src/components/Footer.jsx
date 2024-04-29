import mail from "../images/envelope-outline.svg";
import { links1, links2, links3, links4 } from "../utils/data";

import chair from "../images/sofa.png";
import facebook from "../images/facebook-app-symbol.svg";

const FooterLinks = (props) => {
  return <p className="text-sm font-thin">{props.link}</p>;
};

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between h-screen w-full px-24 bg-white py-24 relative">
      <section className="flex flex-col w-full gap-2">
        <div className="flex items-center gap-1">
          <img src={mail} alt="" className="w-6 h-6" />
          <h1 className="text-xl font-semibold">Subsecribe to Newsletter</h1>
        </div>
        <div className="flex items-center gap-4 w-full">
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-400 rounded-lg w-1/5 py-3 px-4 outline-none text-sm"
          />
          <input
            type="text"
            placeholder="Enter your Email"
            className="border border-gray-400 rounded-lg w-1/5 py-3 px-4 outline-none text-sm"
          />
          <button className="bg-shadegreen w-1/12 py-3 flex items-center justify-center text-white rounded-lg cursor-pointer hover:bg-shadegreen/90">
            SEND
          </button>
        </div>
      </section>
      <section className="flex justify-between w-full">
        <div className="flex flex-col gap-8 w-1/4">
          <h1 className="text-5xl">Furnii</h1>
          <p className="text-base font-thin">
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant
          </p>
          <div className="flex items-center gap-3">
            <div className="group flex items-center justify-center w-8 h-8 bg-gray-500 rounded-full transition-all duration-500 hover:bg-shadegreen">
              <img
                src={facebook}
                alt=""
                className="group-hover:fill-white w-4 h-4"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-end h-full">
          {links1.map((i) => (
            <FooterLinks link={i} />
          ))}
        </div>
        <div className="flex flex-col gap-4 justify-end h-full">
          {links2.map((i) => (
            <FooterLinks link={i} />
          ))}
        </div>
        <div className="flex flex-col gap-4 justify-end h-full">
          {links3.map((i) => (
            <FooterLinks link={i} />
          ))}
        </div>
        <div className="flex flex-col gap-4 justify-end h-full">
          {links4.map((i) => (
            <FooterLinks link={i} />
          ))}
        </div>
      </section>
      <section className="w-full py-4 border-t flex justify-between">
        <p className="text-sm font-thin">
          Copyright ©2024. All Rights Reserved. — Designed with love by
          <a href="" className="ml-1 hover:text-gray-300">
            Untree.co
          </a>
        </p>
        <div className="flex items-center gap-4">
          <p className="text-sm font-thin cursor-pointer hover:text-gray-300">
            Terms & Conditions
          </p>
          <p className="text-sm font-thin cursor-pointer hover:text-gray-300">
            Privacy Policy
          </p>
        </div>
      </section>
      <img
        src={chair}
        alt=""
        className="absolute -top-20 right-28 object-cover w-[30%]"
      />
    </footer>
  );
};

export default Footer;
