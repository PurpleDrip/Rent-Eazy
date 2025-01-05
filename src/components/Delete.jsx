import axios from "axios";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { refetch } from "../Store/userSlice";

const Delete = ({ id, setShowMenu }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(`Deleting item with ID: ${id}`);
    axios
      .post("http://localhost:3000/deletebyID", { id })
      .then((response) => console.log(response))
      .then(() => dispatch(refetch()))
      .catch((err) => console.log(err));
    setShowMenu();
  };

  return (
    <div className="absolute bg-gray-700 h-full w-full rounded-lg z-10 flex items-center justify-center">
      <button
        className="bg-red-500 px-4 py-2 rounded-xl relative z-40"
        onClick={handleDelete}
      >
        Delete
      </button>
      <div
        className="absolute top-4 right-4 cursor-pointer"
        onClick={setShowMenu}
      >
        <AiOutlineCloseCircle size={30} color="red" />
      </div>
    </div>
  );
};

export default Delete;
