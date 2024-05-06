import { NavLink } from "react-router-dom";

const Input = ({ type, text, placeholder }) => {
  return (
    <div className="flex flex-col  w-full">
      <label className="text-base">{text}:</label>
      <input
        type={type}
        className="w-full py-1 text-sm px-4 border border-shadegreen outline-none rounded-md"
        placeholder={placeholder}
      />
    </div>
  );
};

const Login = () => {
  return (
    <div className="w-full h-screen bg-shadegreen flex justify-between items-center">
      <div className="flex flex-col w-auto h-auto mx-auto gap-4 bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-handlee">Login to your account</h1>
        <div className="flex flex-col h-auto w-full gap-4">
          <Input type="email" placeholder="Type Your Email" text="Email" />
          <Input
            type="password"
            placeholder="Type Your Password"
            text="Password"
          />
        </div>
        <p className="text-sm">
          Dont have an account ?{" "}
          <NavLink to="/register" className="font-semibold cursor-pointer">
            Register
          </NavLink>
        </p>
        <button className="w-2/5 py-2 border-none rounded-lg bg-shadegreen text-white shadow-xl ">
          LOGIN
        </button>
      </div>
      <img
        src="https://plus.unsplash.com/premium_photo-1678074057896-eee996d4a23e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
        className="w-2/5 h-full object-cover"
      />
    </div>
  );
};

export default Login;
