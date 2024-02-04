import { React, useContext } from "react";
import { FavContext } from "../Store/FavState";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

function IndexPage() {
  const { data, setData } = useContext(FavContext);

  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      const newData = [...data];
      newData.splice(index, 1);
      setData(newData);
      localStorage.setItem("data", JSON.stringify(newData));
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[20vh] flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Welcome to the Favourite NPM Packages.
        </h1>
      </div>

      <div className=" flex justify-center">
        <button
          onClick={() => {
            navigate("/Fav");
            // alert({data})
          }}
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0">
            Add Fav
          </span>
        </button>
      </div>

      <div class="overflow-auto px-[6%] rounded-md">
        <table class="w-full divide-y-2  divide-gray-200 bg-white text-sm">
          <thead class="ltr:text-left rtl:text-right">
            <tr>
              <th class="whitespace-nowrap px-4 bg-gray-400 py-2 font-medium text-gray-900">
                Package Name
              </th>
              <th class="whitespace-nowrap bg-gray-400 px-4 py-2 font-medium text-gray-900">
                Description
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 max-h-[40vh]">
            {data?.map((item, index) => (
              <tr key={index} className="p-2 bg-gray-300 rounded-md">
                <td className="whitespace-nowrap py-4 px-4 text-xl font-medium text-gray-900">
                  {item.packagename}
                </td>
                <td className="flex space-x-4 py-4 whitespace-nowrap items-center justify-between px-4 py-2 text-gray-700">
                  {item.description}
                  <span className="text-xl flex space-x-7">
                    <Link to={item.link} target="blank">
                      <FaExternalLinkAlt />
                    </Link>
                    <span onClick={() => handleDelete(index)}>
                      <MdDelete />
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default IndexPage;
