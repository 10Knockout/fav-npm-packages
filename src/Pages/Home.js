import React, {useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FavContext } from "../Store/FavState";
function Home() {
  const navigate = useNavigate();

  const { data, setData } = useContext(FavContext);
  useEffect(() => {
    if (localStorage.getItem("data")) navigate("/IndexPage");
  }, []);
  return (
    <>
      <h1 className="text-4xl font-bold h-[40vh] flex items-center justify-center">
        Welcome to Favourite NPM Packages
      </h1>
      <div className="relative border-2 border-gray-300 p-4 rounded h-[30vh] w-[80vw] flex flex-col items-center justify-center mx-auto my-auto mb-[25vh]">
        <p> Add you favourite packages </p>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0">
            Add Fav
          </span>
        </button>
      </div>
    </>
  );
}

export default Home;
