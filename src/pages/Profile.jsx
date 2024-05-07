import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pen from "../images/pen.svg";

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
  return (
    <>
      <Navbar />
      <section className="w-full h-full">
        <header className="w-full h-[30vh] flex items-center justify-center bg-shadegreen">
          <h1 className="text-3xl font-semibold text-teal-50">User Profile</h1>
        </header>
        <div className="flex flex-col h-screen py-4 px-24">
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
                placeholder="khaledsaoud15"
                type="text"
                name="username"
              />
              <Input
                text="Email"
                placeholder="khaledsaoud@gmail.com"
                type="email"
                name="email"
              />
              <Input text="Name" placeholder="Khaled" type="text" name="name" />
              <Input
                text="Last Name"
                placeholder="Saoud"
                type="text"
                name="lastname"
              />
              <Input
                text="City"
                placeholder="Algeria"
                type="text"
                name="city"
              />
              <Input
                text="Street"
                placeholder="Hussein dey"
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
              UPDATE
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
