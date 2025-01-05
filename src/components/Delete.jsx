import axios from "axios";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addData } from "../Store/userSlice";

const Delete = ({ id, setShowMenu }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    setIsLoading(true);
    setDeleteError("");
    axios
      .post("http://localhost:3000/deletebyID", { id })
      .then((response) => {
        console.log(response);
        axios
          .get("http://localhost:3000/getData") // Refetch data from the server
          .then((response) => {
            // Update the state with the new data
            dispatch(addData(response.data));
          })
          .catch((err) => {
            console.log("Error refetching data:", err);
          });
        setIsLoading(false);
        setShowMenu(false); // Close the menu after successful delete
      })
      .catch((err) => {
        setDeleteError("An error occurred while deleting.");
        setIsLoading(false);
        console.log(err);
      });
  };

  const handleConfirmDelete = (e) => {
    e.stopPropagation(); // Prevent the context menu from closing
    setConfirmDelete(true);
  };

  const handleCancelDelete = (e) => {
    e.stopPropagation(); // Prevent the context menu from closing
    setConfirmDelete(false);
  };

  return (
    <div className="absolute bg-gray-700 h-full w-full rounded-lg z-50 flex items-center justify-center">
      {!confirmDelete ? (
        <>
          <button
            className="bg-red-500 px-4 py-2 rounded-xl relative z-40"
            onClick={handleConfirmDelete} // Show confirmation on click
          >
            Delete
          </button>
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setShowMenu(false)} // Close the menu when clicking the close button
          >
            <AiOutlineCloseCircle size={30} color="red" />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center gap-4 p-8 bg-gray-800 rounded-lg shadow-lg z-50 w-4/5">
          <p className="text-white text-sm">
            Are you sure you want to delete this item?
          </p>
          <div className="flex gap-4">
            <button
              className="bg-green-500 px-4 py-2 rounded-xl text-sm"
              onClick={handleDelete}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Yes, Delete"}
            </button>
            <button
              className="bg-gray-500 px-4 py-2 rounded-xl text-sm"
              onClick={handleCancelDelete}
            >
              Cancel
            </button>
          </div>
          {deleteError && (
            <p className="text-red-500 text-sm mt-4">{deleteError}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Delete;
