import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";
import { light_theme, dark_theme } from "./theme";
import { getCountries } from "./services";
import { Header } from "./components/header";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme == "light" ? light_theme : dark_theme}>
      <GlobalStyle />
      <Header handleClick={themeToggler} currentTheme={theme} />
    </ThemeProvider>
  );
};

export default App;
