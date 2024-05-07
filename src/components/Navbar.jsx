import { links } from "../utils/data";
import user from "../images/user.svg";
import bag from "../images/cart.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const DropDown = () => {
  return (
    <div className="hidden flex-col w-24 h-auto z-10   gap-2 bg-white shadow-md rounded-lg absolute top-7 -left-20  group-hover:flex">
      <NavLink
        to="/login"
        className="text-sm font-semibold p-2 hover:bg-slate-100 rounded-lg flex items-center justify-center"
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className="text-sm font-semibold p-2 hover:bg-slate-100 rounded-lg flex items-center justify-center"
      >
        Signup
      </NavLink>
    </div>
  );
};

const Navbar = () => {
  const cart = useSelector((props) => props.cart.cart);
  const userExist = useSelector((props) => props.login.user);
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
          <div className="">
            {userExist ? (
              <NavLink to="/profile">
                <img
                  src="https://i.pinimg.com/564x/e0/89/46/e08946b2d277eeb77747cc871f9b5b9f.jpg"
                  alt=""
                  className="w-6 h-6 object-cover rounded-full cursor-pointer"
                />
              </NavLink>
            ) : (
              <div className="relative w-4 h-6 group">
                <img
                  src={user}
                  alt=""
                  className="w-full h-full object-fit cursor-pointer "
                />
                <DropDown />
              </div>
            )}
          </div>
          <NavLink to="/cart" className="relative">
            <p className="text-xs font-semibold   bg-white rounded-full flex items-center justify-center absolute -top-4 w-5 h-5 -right-4">
              {cart.length}
            </p>
            <img
              src={bag}
              alt=""
              className="w-5 h-6 object-fit cursor-pointer "
            />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
