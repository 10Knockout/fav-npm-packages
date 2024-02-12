// IndexPage.js

import React, { useState, useEffect } from "react";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./IndexPage.css"; // Import CSS for styling

const IndexPage = () => {
  const navigate = useNavigate();

  const [packagesList, setPackagesList] = useState(
    JSON.parse(localStorage.getItem("packagesList") || "[]")
  );
  const [editingPackage, setEditingPackage] = useState(null);
  const [editedDescription, setEditedDescription] = useState("");

  useEffect(() => {
    localStorage.setItem("packagesList", JSON.stringify(packagesList));
  }, [packagesList]);

  const handleClick = () => {
    navigate("/add");
  };

  const handleViewClick = (value) => {
    navigate("/view", { state: value });
  };

  const handleEditClick = (value) => {
    setEditingPackage(value);
    setEditedDescription(value.description);
  };

  const handleDeleteClick = (value) => {
    navigate("/delete", { state: value });
  };

  const handleSaveEdit = () => {
    const updatedPackagesList = packagesList.map((pkg) =>
      pkg.name === editingPackage.name ? { ...pkg, description: editedDescription } : pkg
    );
    setPackagesList(updatedPackagesList);
    setEditingPackage(null);
  };

  return (
  <div className="h-[100vh] md:p-[100px] p-[20px]">
    <div className="flex items-center justify-between">
      <div className="flex-grow text-center">
        <div className="heading text-[2em] font-bold">
          Welcome to Favorite NPM Packages.
        </div>
      </div>
      {packagesList.length > 0 ? (
        <div>
          <Button onClick={handleClick} label="Add Fav" />
        </div>
      ) : null}
    </div>

    {packagesList.length > 0 ? (
      <>
        <div className="md:mt-[150px] p-9 mt-[50px] h-[40vh] border border-slate-400">
          <div className="flex text-[20px]  font-semibold">
            <div className="w-3/5 text-start">Package Name</div>
            <div>Actions</div>
          </div>
          <div className=" text-[15px]  font-medium">
            {packagesList.map((value, index) => (
              <div className="flex" key={index}>
                <div className="w-3/5 text-start">{value.name}</div>
                <div className="flex space-x-2">
                  <span onClick={() => handleViewClick(value)}>
                    <IoEyeOutline />
                  </span>
                  <span onClick={() => handleEditClick(value)}>
                    <MdOutlineModeEdit />
                  </span>
                  <span onClick={() => handleDeleteClick(value)}>
                    <RiDeleteBin6Line />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {editingPackage && (
          <div className="edit-box">
            <div className="text-2xl mb-2 text-center">
              <span className="font-bold text-3xl text-white">Name of the Package :</span> {editingPackage.name}
            </div>
            <div className="text-2xl mt-4 mb-6 text-center">
              <span className="font-bold text-3xl text-white">Description of the package :</span> {editingPackage.description}
            </div>
            <div className="text-3xl font-bold text-white mb-4 text-center">Update the Description :</div>
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              type="text"
              className="px-4 py-2 rounded-lg w-full mt-3 mb-4 h-[9em] bg-white dark:bg-white text-black dark:text-black"
            />
            <div className="flex justify-center">
              <Button
                onClick={handleSaveEdit}
                label="Save"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "1rem",
                  padding: "0.5rem 1rem",
                  transition: "all 0.3s ease-in",
                }}
              />
              <Button
                onClick={() => setEditingPackage(null)}
                label="Cancel"
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
        )}
      </>
    ) : (
      <div className="md:mt-[150px] mt-[50px] h-[40vh] flex flex-col justify-center border border-slate-400">
        <div className="text-center mb-[30px]">You don't have any favorites yet. Please add.</div>
        <div className="text-center">
          <Button onClick={handleClick} label="Add Fav" />
        </div>
      </div>
    )}
  </div>
);
    }

export default IndexPage;
