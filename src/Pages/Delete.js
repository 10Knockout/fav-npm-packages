import React from "react";
import Button from "../Components/Button";
import { useNavigate, useLocation } from "react-router-dom";

const Delete = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const handleYes = () => {
    const updatedPackagesList = JSON.parse(
      localStorage.getItem("packagesList")
    ).filter((pkg) => pkg.name !== state.name);
    localStorage.setItem("packagesList", JSON.stringify(updatedPackagesList));
    navigate("/");
  };

  const handleNo = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[500px] h-[500px] bg-gradient-to-br from-green-400 to-blue-600 rounded-lg p-5 relative inline-flex flex-col items-center justify-center">
        <div className="text-xl mb-2">
          <span className="font-bold text-2xl text-white">
            Are you sure you want to delete:
          </span>{" "}
          {state.name}?
        </div>
        <div className="flex space-x-3">
          <Button onClick={handleYes} label="Yes" />
          <Button onClick={handleNo} label="No" />
        </div>
      </div>
    </div>
  );
};

export default Delete;
