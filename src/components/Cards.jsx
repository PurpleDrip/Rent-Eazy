import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-12 w-full items-center justify-center  bg-[#242424]">
      {data.map((atom, index) => (
        <div
          key={atom.id}
          className="min-h-[20rem] w-[20rem] bg-gray-100 flex-shrink-0 flex flex-col items-center justify-center gap-2 p-4 rounded-xl relative"
        >
          <img src={atom.image} alt="" />
          <h1 className="text-lg">{atom.name}</h1>
          <p className="text-gray-700 text-lg">
            <span className="text-xl text-black">Address-</span> {atom.address}
          </p>
          <button
            className="bg-blue-300 px-8 py-2 rounded text-sm hover:bg-blue-200"
            onClick={() => navigate(`/enquire`, { state: { ...atom } })}
          >
            Enquire
          </button>
          <h1 className="absolute text-black top-8 left-8 bg-green-400 px-3 rounded-xl text-sm py-1">
            {atom.tag}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Cards;
