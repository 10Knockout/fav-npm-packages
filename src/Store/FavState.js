import React, { createContext, useState, useEffect } from "react";

// Create the context with a default value
export const FavContext = createContext({ data: [], setData: () => {} });

// Create the store component
export const FavState = ({ c }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Debug statement to check stored data
    const storedData = localStorage.getItem("data");
    console.log("Stored Data:", storedData);

    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  // Provide the data and methods to the children components
  return (
    <FavContext.Provider value={{ data, setData }}>
      {c}
    </FavContext.Provider>
  );
};

export default FavState;
