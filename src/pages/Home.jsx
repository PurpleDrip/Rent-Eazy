import React, { useState } from "react";
import Login from "../modals/Login";
import { NavLink } from "react-router-dom";
import Register from "../modals/Register";
import { useSelector } from "react-redux";
import { register } from "../Store/userSlice";

const Home = () => {
  const isRegistered = useSelector((state) => state.user.isRegistered);
  console.log(isRegistered);

  const [LoginModal, setLoginModal] = useState(false);
  const [RegisterModal, setRegisterModal] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-[#242424] pt-8">
        <section className="h-12 mx-8 bg-black rounded-xl flex items-center justify-between p-8">
          <div>
            <h1 className="text-white text-3xl font-bold">Rent Eazy</h1>
          </div>
          <div className="flex gap-8 text-white">
            {isRegistered ? (
              <>
                <NavLink to="/rent">Browse</NavLink>
                <NavLink to="/listing">Rent Ur House</NavLink>
              </>
            ) : (
              <>
                <NavLink onClick={() => setLoginModal((prev) => !prev)}>
                  Login
                </NavLink>
                <NavLink onClick={() => setRegisterModal((prev) => !prev)}>
                  Register
                </NavLink>
              </>
            )}
          </div>
        </section>
        <div></div>
      </div>
      {LoginModal && <Login setLoginModal={setLoginModal} />}
      {RegisterModal && <Register setRegisterModal={setRegisterModal} />}
    </>
  );
};

export default Home;
