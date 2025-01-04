import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const Login = ({ setLoginModal }) => {
  return (
    <div className="absolute h-screen w-full top-0 left-0 z-50 bg-transparent flex items-center justify-center">
      <form className="h-[50vh] w-[20vw] flex flex-col gap-8 items-center justify-center py-12 rounded-3xl bg-black relative shadow-2xl">
        <div
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => setLoginModal((prev) => !prev)}
        >
          <IoCloseCircleOutline color="red" size={25} />
        </div>
        <h1 className="text-5xl text-green-400">Login</h1>
        <input
          type="text"
          placeholder="Username"
          className="px-2 py-2 rounded-xl"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-2 py-2 rounded-xl"
        />
        <button className="bg-green-400 px-12 py-2 rounded-3xl text-lg hover:bg-green-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
