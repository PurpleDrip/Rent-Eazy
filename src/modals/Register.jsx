import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const Register = ({ setRegisterModal }) => {
  return (
    <div className="absolute h-screen w-full top-0 left-0 z-50 bg-transparent flex items-center justify-center">
      <form className="min-h-[50vh] w-[20vw] flex flex-col gap-8 items-center justify-center py-12 rounded-3xl bg-black relative shadow-2xl">
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
          className="px-2 py-2 rounded-xl outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-2 py-2 rounded-xl outline-none"
        />
        <input
          type="number"
          name="age"
          id="age"
          min="18"
          max="100"
          className="px-16 py-2 rounded-xl outline-none"
          placeholder="Age"
        />
        <select
          name="gender"
          id="gender"
          className="outline-none px-10 py-2 rounded-xl"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input
          type="tel"
          placeholder="Phone Number"
          className="px-2 py-2 rounded-xl outline-none"
        />
        <button className="bg-green-400 px-12 py-2 rounded-3xl text-lg hover:bg-green-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
