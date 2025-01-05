import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Delete from "./Delete";

const Cards = ({ data }) => {
  const navigate = useNavigate();
  const [menuVisibleId, setMenuVisibleId] = useState(null); // Tracks which card's menu is visible

  // Close menu if the user clicks outside of the card
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuVisibleId && !e.target.closest(".card")) {
        setMenuVisibleId(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuVisibleId]);

  return (
    <div className="flex flex-wrap gap-12 w-full items-center justify-center bg-[#242424]">
      {data.map((atom) => (
        <div
          key={atom._id}
          onContextMenu={(e) => {
            e.preventDefault(); // Prevent browser's default context menu
            setMenuVisibleId(atom._id); // Set the ID of the card where the menu should be visible
          }}
          className="min-h-[20rem] w-[20rem] bg-gray-100 flex-shrink-0 flex flex-col items-center justify-center gap-2 p-4 rounded-xl relative card"
        >
          <img
            src={atom.image}
            alt={`${atom.name} property`}
            style={{ objectFit: "cover" }}
          />
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
          {/* Show Delete menu only for the currently selected card */}
          {menuVisibleId === atom._id && (
            <Delete id={atom._id} setShowMenu={() => setMenuVisibleId(null)} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Cards;
