import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Components/Button";

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
        <div className="text-2xl mb-2 text-center">
          <span className="font-bold text-3xl text-white">
            Name of the Package :
          </span>{" "}
          {state.name}
        </div>
        <div className="text-2xl mt-4 mb-6 text-center">
          <span className="font-bold text-3xl text-white">
            Description of the package :
          </span>{" "}
          {state.description}
        </div>
        <div className="text-3xl font-bold text-white mb-4 text-center">
          Update the Description :
        </div>
        <textarea
          value={description}
          onChange={handleChange}
          type="text"
          className="px-4 py-2 rounded-lg w-full mt-3 mb-4 h-[9em] bg-white dark:bg-white text-black dark:text-black"
        />
        <div className="flex space-x-3">
          <Button
            onClick={handleSubmit}
            label="Submit"
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: "1rem",
              padding: "0.5rem 1rem",
              transition: "all 0.3s ease-in",
            }}
          />
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

export default Edit;
