import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Components/Button";

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
          <span className="font-bold text-2xl text-white">Name:</span>{" "}
          {state.name}
        </div>
        <div className="text-xl mb-4">
          <span className="font-bold text-2xl text-white">Description:</span>{" "}
          {state.description}
        </div>
        <div className="flex space-x-3">
          <Button
            onClick={handleClick}
            label="Return"
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: "1rem",
              padding: "0.5rem 1rem",
              transition: "all 0.3s ease-in",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default View;
