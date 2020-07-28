import React, { useState, createContext, useEffect } from "react";
import { getCountries } from "./services";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((data) => setCountries(data));
  }, []);

  return (
    <CountryContext.Provider value={countries}>
      {children}
    </CountryContext.Provider>
  );
};
