import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from "axios";
import { useDispatch } from "react-redux";
import { registered } from "../Store/userSlice";

const Register = ({ setRegisterModal }) => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/register",
        formData
      );
      setError(response.data.message);

      dispatch(registered());
      setRegisterModal((prev) => !prev);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="absolute h-screen w-full top-0 left-0 z-50 bg-transparent flex items-center justify-center">
      <form
        className="min-h-[50vh] w-[20vw] flex flex-col gap-8 items-center justify-center py-12 rounded-3xl bg-black relative shadow-2xl border-2 border-red-400"
        onSubmit={(e) => submitHandler(e)}
      >
        <div
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => setRegisterModal((prev) => !prev)}
        >
          <IoCloseCircleOutline color="red" size={25} />
        </div>
        <h1 className="text-5xl text-green-400">Register</h1>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="px-2 py-2 rounded-xl outline-none"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="px-2 py-2 rounded-xl outline-none"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="age"
          id="age"
          min="18"
          max="100"
          className="px-16 py-2 rounded-xl outline-none"
          placeholder="Age"
          onChange={handleInputChange}
        />
        <select
          name="gender"
          id="gender"
          className="outline-none px-10 py-2 rounded-xl"
          onChange={handleInputChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input
          type="tel"
          placeholder="Phone Number"
          name="phoneNumber"
          className="px-2 py-2 rounded-xl outline-none"
          onChange={handleInputChange}
        />
        <button className="bg-green-400 px-12 py-2 rounded-3xl text-lg hover:bg-green-300">
          Submit
        </button>
        <h1 className="text-red-500 text-xl">{error ? error : ""}</h1>
      </form>
    </div>
  );
};

export default Register;
