import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pen from "../images/pen.svg";
import { useSelector } from "react-redux";

const Input = ({ text, placeholder, type, value, name }) => {
  return (
    <div className="flex flex-col gap-1 w-full h-auto">
      <label className="text-sm font-semibold">{text}:</label>
      <input
        type={type}
        name={name}
        onChange={onchange}
        placeholder={placeholder}
        value={value}
        className="w-full border shadow-lg outline-none rounded-md py-2 px-2 text-sm "
      />
    </div>
  );
};

const Profile = () => {
  const user = useSelector((props) => props.login.user);
  return (
    <>
      <Navbar />
      <section className="w-full h-full">
        <header className="w-full h-[30vh] flex items-center justify-center bg-shadegreen">
          <h1 className="text-3xl font-semibold text-teal-50">User Profile</h1>
        </header>
        <div className="flex flex-col h-full py-24 px-24">
          <div className="w-2/3 h-full p-4  mx-auto flex flex-col gap-3">
            <div className="flex items-center justify-center w-2/4 h-20 mx-auto relative">
              <img
                src="https://i.pinimg.com/564x/e0/89/46/e08946b2d277eeb77747cc871f9b5b9f.jpg"
                alt=""
                className="w-1/4 h-auto object-cover rounded-full"
              />
              <label className="absolute right-[38%] top-[80%]">
                <input type="file" required className="hidden" />
                <img
                  src={pen}
                  alt=""
                  className="w-5 h-5 object-cover cursor-pointer z-10"
                />
              </label>
            </div>
            <div className="grid grid-cols-2 grid-rows-4 w-full h-auto  gap-4 mt-6 [&>*:last-child]:col-span-2 ">
              <Input
                text="Username"
                placeholder={user ? user.username : "Username"}
                type="text"
                name="username"
              />
              <Input
                text="Email"
                placeholder={user ? user.email : "Email"}
                type="email"
                name="email"
              />
              <Input
                text="Name"
                placeholder={user ? user.name : "Name"}
                type="text"
                name="name"
              />
              <Input
                text="Last Name"
                placeholder={user ? user.lastname : "Lastname"}
                type="text"
                name="lastname"
              />
              <Input
                text="City"
                placeholder={user ? user.city : "City"}
                type="text"
                name="city"
              />
              <Input
                text="Street"
                placeholder={user ? user.street : "Street"}
                type="text"
                name="street"
              />

              <Input
                text="Password"
                placeholder="....."
                type="password"
                name="password"
                className="col-span-2"
              />
            </div>
            <button className="w-2/5 py-1 mx-auto mt-4 bg-shadegreen text-white rounded-lg">
              UPDATE USER
            </button>
          </div>
          <div className="flex w-full h-auto gap-4">
            <div className="flex flex-col gap-2 w-2/4 h-auto p-2 rounded-lg bg-shadegreen text-white">
              <h1 className="text-xl font-semibold">Purchase History</h1>
              <div className="flex flex-col gap-2 h-full w-full justify-around min-h-auto overflow-y-scroll pr-2">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold">
                    Order ID:{" "}
                    <span className="font-bold">4646vdfvnlq+s64dv</span>
                  </h1>
                  <h4 className="font-semibold text-base">
                    Items: <span className="font-thin">5</span>
                  </h4>
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold">
                    Order ID:{" "}
                    <span className="font-bold">4646vdfvnlq+s64dv</span>
                  </h1>
                  <h4 className="font-semibold text-base">
                    Items: <span className="font-thin">5</span>
                  </h4>
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold">
                    Order ID:{" "}
                    <span className="font-bold">4646vdfvnlq+s64dv</span>
                  </h1>
                  <h4 className="font-semibold text-base">
                    Items: <span className="font-thin">5</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-2 w-2/4 h-full bg-shadegreen text-white rounded-lg">
              <h1 className="text-center font-semibold text-xl">Checkout</h1>
              <h2 className="text-base font-semibold">
                Total Price: <span className="font-bold">$50142</span>
              </h2>
              <h2 className="text-base font-semibold">
                Taxes: <span className="font-bold">1.9%</span>
              </h2>
              <h2 className="text-base font-semibold">
                Full Price: <span className="font-bold">$5062</span>
              </h2>
              <div className="flex items-center justify-between w-full">
                <button className="w-1/3 py-2 bg-white text-shadegreen rounded-lg shadow-lg active:bg-slate-200">
                  Proceed to payment
                </button>
                <button className="w-1/3 py-2 bg-shadegreen text-white rounded-lg  active:bg-white active:text-black">
                  Back to store
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
