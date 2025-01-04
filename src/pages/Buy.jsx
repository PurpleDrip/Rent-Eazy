import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { data } from "../../data";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../Store/userSlice";

const Buy = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const houseData = useSelector((state) => state.user.houseData);

  const [filter, setFilter] = useState("default");

  useEffect(() => {
    if (filter === "default") {
      dispatch(addData(data));
    } else {
      const filteredData = data.filter((item) => item.tag === filter);
      dispatch(addData(filteredData));
    }
  }, [filter, dispatch]);

  return (
    <>
      <div className="p-4 cursor-pointer bg-[#242424] flex items-center justify-between">
        <IoMdArrowRoundBack
          size={40}
          color="white"
          onClick={() => navigate("/")}
        />
        <div className="flex items-center justify-center gap-4">
          <select
            name="filter"
            id="filter"
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 rounded-xl py-2 px-1"
          >
            <option value="default">Filter by</option>
            <option value="rent">Rent</option>
            <option value="buy">Buy</option>
            <option value="commercial">Commercial</option>
          </select>
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
