import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import axios from "axios";

const Input = ({ type, text, placeholder, name, onchange, value }) => {
  return (
    <div className="flex flex-col  w-full">
      <label className="text-base">{text}:</label>
      <input
        type={type}
        className="w-full py-1 text-sm px-4 border border-shadegreen outline-none rounded-md"
        placeholder={placeholder}
        name={name}
        onChange={onchange}
        value={value}
        required
      />
    </div>
  );
};

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handlSubmit = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerUserToArray = async () => {
    if (user.username === "" || user.email === "" || user.password === "") {
      return;
    }

    try {
      await axios.post("http://localhost:8080/auth/register", user);
      navigate("/login");
    } catch (err) {
      console.error(err.message);
    }

    setUser({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-full h-screen bg-shadegreen flex justify-between items-center">
      <img
        src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlfGVufDB8fDB8fHww"
        alt=""
        className="w-2/5 h-full object-cover"
      />
      <div className="flex flex-col w-auto h-auto mx-auto gap-4 bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-handlee">Create your account</h1>
        <div className="flex flex-col h-auto w-full gap-2">
          <Input
            type="text"
            placeholder="Type Your Username"
            text="Username"
            name="username"
            onchange={handlSubmit}
            value={user.username}
          />
          <Input
            type="email"
            placeholder="Type Your Email"
            text="Email"
            name="email"
            onchange={handlSubmit}
            value={user.email}
          />
          <Input
            type="password"
            placeholder="Type Your Password"
            text="Password"
            name="password"
            onchange={handlSubmit}
            value={user.password}
          />
        </div>
        <p className="text-sm">
          Already have an account ?{" "}
          <NavLink to="/login" className="font-semibold cursor-pointer">
            Login
          </NavLink>
        </p>
        <button
          onClick={() => registerUserToArray(user.email)}
          type="submit"
          className="w-2/5 py-2 border-none rounded-lg bg-shadegreen text-white shadow-xl "
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Signup;
