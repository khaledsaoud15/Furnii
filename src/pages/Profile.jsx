import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pen from "../images/pen.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUserProfile } from "../redux/userSlice";

const Input = ({ text, placeholder, type, value, name, onChange }) => {
  return (
    <div className="flex flex-col gap-1 w-full h-auto">
      <label className="text-sm font-semibold">{text}:</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className="w-full border shadow-lg outline-none rounded-md py-2 px-2 text-sm "
      />
    </div>
  );
};

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user?.user);
  console.log(user);
  const [formData, setFormData] = useState({ email: "", name: "" });

  useEffect(() => {
    if (user && id === user._id) {
      setFormData({ name: user.name, email: user.email });
    }
  }, [user, id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(id, formData));
  };

  return (
    <>
      <Navbar />
      <section className="w-full h-full">
        <header className="w-full h-[30vh] flex items-center justify-center bg-shadegreen">
          <h1 className="text-3xl font-semibold text-teal-50">User Profile</h1>
        </header>
        <div className="flex flex-col h-full py-24 px-24">
          <div className="w-2/3 h-full p-4 mx-auto flex flex-col gap-3">
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
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 grid-rows-4 w-full h-auto gap-4 mt-6 [&>*:last-child]:col-span-2 ">
                <Input
                  text="Username"
                  type="text"
                  name="username"
                  value={formData.username || ""}
                  onChange={handleChange}
                />
                <Input
                  text="Email"
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                />
                <Input
                  text="Name"
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                />
                <Input
                  text="Last Name"
                  type="text"
                  name="lastname"
                  value={formData.lastname || ""}
                  onChange={handleChange}
                />
                <Input
                  text="City"
                  type="text"
                  name="city"
                  value={formData.city || ""}
                  onChange={handleChange}
                />
                <Input
                  text="Street"
                  type="text"
                  name="street"
                  value={formData.street || ""}
                  onChange={handleChange}
                />
                <Input
                  text="Password"
                  placeholder="....."
                  type="password"
                  name="password"
                  className="col-span-2"
                  value={formData.password || ""}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-2/5 py-1 mx-auto mt-4 bg-shadegreen text-white rounded-lg"
              >
                UPDATE USER
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
