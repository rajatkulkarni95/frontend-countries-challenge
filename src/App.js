import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";
import { light_theme, dark_theme } from "./theme";

import { Header } from "./components/header";
import { Routes } from "./routes";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? light_theme : dark_theme}>
      <GlobalStyle />
      <Header handleClick={themeToggler} currentTheme={theme} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
