import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../Store/userSlice";
import axios from "axios";

const Buy = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const houseData = useSelector((state) => state.user.houseData);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getData")
      .then((response) => {
        dispatch(addData(response.data));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <>
      <div className="p-4 cursor-pointer bg-[#242424] flex items-center justify-between">
        <IoMdArrowRoundBack
          size={40}
          color="white"
          onClick={() => navigate("/")}
        />
        <div className="flex items-center justify-center gap-4">
          <div className="bg-gray-700 px-4 py-2 rounded-xl border-gray-600 text-white border text-sm">
            <NavLink to="/listing">Rent Ur House</NavLink>
          </div>
        </div>
      </div>
      <Cards data={houseData} />
    </>
  );
};

export default Buy;
