import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";
import { themes } from "./theme";

import { Header } from "./components/header";
import { Routes } from "./routes";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  console.log(themes.fontSize);

  return (
    <ThemeProvider
      theme={theme === "light" ? themes.light_theme : themes.dark_theme}
    >
      <GlobalStyle />
      <Header handleClick={themeToggler} currentTheme={theme} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
