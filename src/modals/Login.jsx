import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from "axios";
import { useDispatch } from "react-redux";
import { registered } from "../Store/userSlice";

const Login = ({ setLoginModal }) => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        formData
      );
      setError(response.data.message);

      dispatch(registered());
      setLoginModal((prev) => !prev);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };
  return (
    <div className="absolute h-screen w-full top-0 left-0 z-50 bg-transparent flex items-center justify-center">
      <form
        className="h-[50vh] w-[20vw] flex flex-col gap-8 items-center justify-center pt-4 rounded-3xl bg-black relative shadow-2xl"
        onSubmit={(e) => submitHandler(e)}
      >
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
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          className="px-2 py-2 rounded-xl"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button className="bg-green-400 px-12 py-2 rounded-3xl text-lg hover:bg-green-300">
          Submit
        </button>
        <h1 className="text-red-500 text-xl">{error ? error : ""}</h1>
      </form>
    </div>
  );
};

export default Login;
