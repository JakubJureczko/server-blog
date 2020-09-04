import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StateContext = createContext({});

export default function StateContextProvider({ children }) {
  const [entries, setEntries] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [side, setSide] = useState(1);
  const [count, setCount] = useState(1);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/albums`)
      .then((response) => setEntries(response.data.data))
      .catch((error) => {
        console.log("Request failed");
      });
  }, []);
console.log(entries)

  return (
    <StateContext.Provider
      value={{
        entries,
        filteredEntries,
        setFilteredEntries,
        side,
        setSide,
        count,
        setCount,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
