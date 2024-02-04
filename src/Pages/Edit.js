import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [description, setDescription] = useState("");

  const handleClick = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    const packagesList = JSON.parse(localStorage.getItem("packagesList"));
    const packageIndex = packagesList.findIndex(
      (pkg) => pkg.name === state.name
    );

    if (description.length !== 0) {
      packagesList[packageIndex].description = description;
    }

    localStorage.setItem("packagesList", JSON.stringify(packagesList));

    navigate("/");
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[500px] h-[500px] bg-gradient-to-br from-green-400 to-blue-600 rounded-lg p-5 relative inline-flex flex-col items-center justify-center">
        <div className="text-2xl mb-2">
          <span className="font-bold text-3xl text-white">Name:</span> {state.name}
        </div>
        <div className="text-2xl mt-4 mb-6">
          <span className="font-bold text-3xl text-white">Description:</span>{" "}
          {state.description}
        </div>
        <div className="text-3xl font-bold text-white mb-4">
          Update the Description
        </div>
        <textarea
          value={description}
          onChange={handleChange}
          type="text"
          className="px-4 py-2 rounded-lg w-full mt-3 mb-4 h-[9em] bg-white dark:bg-white text-black dark:text-black"
        />
        <div className="flex space-x-3">
          <button
            className="font-medium px-3 py-1.5 transition-all ease-in duration-75 bg-black dark:bg-black rounded-md group-hover:bg-opacity-0 text-sm text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="font-medium px-3 py-1.5 transition-all ease-in duration-75 bg-black dark:bg-black rounded-md group-hover:bg-opacity-0 text-sm text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            onClick={handleClick}
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
