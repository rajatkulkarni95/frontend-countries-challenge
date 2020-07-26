import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";
import { light_theme, dark_theme } from "./theme";
import { getCountries } from "./services";
import { Header } from "./components/header";
import { Routes } from "./routes";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [countries, setCountries] = useState([]);

  const themeToggler = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    getCountries().then((data) => setCountries(data));
  }, []);

  return (
    <ThemeProvider theme={theme == "light" ? light_theme : dark_theme}>
      <GlobalStyle />
      <Header handleClick={themeToggler} currentTheme={theme} />
      <Routes countries={countries} />
    </ThemeProvider>
  );
};

export default App;
