import { links } from "../utils/data";
import user from "../images/user.svg";
import bag from "../images/cart.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-20 bg-shadegreen px-24">
      <h1 className="text-4xl font-bold text-white ">
        Furni<span className="text-3xl text-darkgrey">.</span>
      </h1>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-10">
          {links.map((l) => (
            <NavLink to={l.path}>
              <p className="text-slate-300 cursor-pointer font-semibold text-base">
                {l.link}
              </p>
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <img
            src={user}
            alt=""
            className="w-4 h-6 object-fit cursor-pointer"
          />
          <img
            src={bag}
            alt=""
            className="w-5 h-6 object-fit cursor-pointer "
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
