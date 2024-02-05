import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[500px] h-[500px] bg-gradient-to-br from-green-400 to-blue-600 rounded-lg p-5 relative inline-flex flex-col items-center justify-center">
        <div className="text-xl mb-2">
          <span className="font-bold text-2xl text-white">Name:</span> {state.name}
        </div>
        <div className="text-xl mb-4">
          <span className="font-bold text-2xl text-white">Description:</span>{" "}
          {state.description}
        </div>
        <button
          className="font-medium px-2 py-1.5 transition-all ease-in duration-75 bg-black dark:bg-black rounded-md group-hover:bg-opacity-0 text-sm text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          onClick={handleClick}
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default View;
