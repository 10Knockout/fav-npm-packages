import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const IndexPage = () => {
  const navigate = useNavigate();

  const [packagesList, setPackagesList] = useState(
    JSON.parse(localStorage.getItem("packagesList") || "[]")
  );

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
    navigate("/edit", { state: value });
  };

  const handleDeleteClick = (value) => {
    if (window.confirm(`You are about to delete ${value.name}?`)) {
      const updatedPackagesList = packagesList.filter(
        (pkg) => pkg.name !== value.name
      );
      setPackagesList(updatedPackagesList);
    }
  };
  return (
    <div className=" h-[100vh] md:p-[100px] p-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex-grow text-center">
          <div className="heading text-[2em] font-bold">
            Welcome to Favorite NPM Packages.
          </div>
        </div>
        {packagesList.length > 0 ? (
          <div>
            <Button onClick={handleClick} label="Add Packages" />
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
              {packagesList.map((value, index) => {
                return (
                  <>
                    <div className="flex">
                      <div className="w-3/5 text-start">{value.name}</div>
                      <div className="flex">
                        {" "}
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
                  </>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="md:mt-[150px] mt-[50px] h-[40vh] flex flex-col justify-center border border-slate-400">
            <div className="text-center mb-[30px]">
              you don't have any fav yet. Please add.
            </div>
            <div className="text-center">
              <Button onClick={handleClick} label="Add Fav" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default IndexPage;
