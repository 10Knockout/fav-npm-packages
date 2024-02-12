import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import TextInput from "../Components/TextInput";
import TextArea from "../Components/TextArea";
import Button from "../Components/Button";
import "./Add.css";

const ErrorBox = ({ message, onClose }) => (
  <div className="error-box">
    {message}
    <div className="return-button-wrapper">
      <Button onClick={onClose} label="Return" />
    </div>
  </div>
);


const Add = () => {
  const navigate = useNavigate();
  const [packagesList, setPackagesList] = useState(
    JSON.parse(localStorage.getItem("packagesList") || "[]")
  );
  const [List, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [textInput, setTextInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState([]);
  const [error, setError] = useState(null);

  const getData = async (value) => {
    console.log("getdata function is running " + value);
    if (value) {
      setIsLoading(true);
      const response = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${value}`
      );
      const packages = await response.json();
      setList(packages.objects);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("packagesList", JSON.stringify(packagesList));
    if (selectedPackage.length !== 0) {
      navigate("/");
    }
  }, [packagesList]);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        console.log(this, args);
        func.apply(this, args);
      }, 500);
    };
  };
  const newfunction = useCallback(debounce(getData), []);

  const radioChange = (e) => {
    setSelectedPackage(e.target.value);
  };

  const errorClick = () => {
    if (selectedPackage && textInput) {
      const uniquePackages = [
        ...packagesList,
        { name: selectedPackage, description: textInput },
      ].filter(
        (obj, index, self) =>
          index === self.findIndex((o) => o.name === obj.name)
      );
      setPackagesList(uniquePackages);
    } else {
      setError("Please select a package and enter the reason for selecting it");
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    newfunction(e.target.value);
  };

  const closeErrorBox = () => {
    setError(null);
  };

  return (
    <div className="h-[100vh] md:p-[100px] p-[20px]">
      <div className="heading text-[2em] font-bold">Search for NPM Packages</div>
      <div>
        <TextInput onChange={(e) => handleChange(e)} placeholder={"angular"} />
      </div>

      {isLoading ? (
        <div className="h-[400px]">loading...</div>
      ) : (
        <>
          <div className="mt-4 overflow-scroll h-[400px]">
            {List.map((value, index) => {
              return (
                <div key={`${value.package.name}${index}`}>
                  <div className="text-[20px]">
                    <span>
                      <input
                        className="mr-3"
                        type="radio"
                        name="package"
                        value={value.package.name}
                        onChange={radioChange}
                        checked={selectedPackage === value.package.name}
                      />
                    </span>
                    {value.package.name}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      <div className="mt-5">
        <div className="heading text-[1.5em] font-bold">
          Why is this you fav?
        </div>
        <TextArea
          value={textInput}
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        />
        <div className="text-right mb-16 pb-16">
          <Button onClick={errorClick} label="Submit" />
        </div>
        {error && <ErrorBox message={error} onClose={closeErrorBox} />}
      </div>
    </div>
  );
};

export default Add;
