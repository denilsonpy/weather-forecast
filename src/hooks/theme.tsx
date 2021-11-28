import { ChakraProvider } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { createContext } from "react";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

interface IThemeContext {
  toggleTheme(): void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const themeSaved = localStorage.getItem("@weather-app:theme");

    if (themeSaved) {
      return JSON.parse(themeSaved);
    } else {
      return dark;
    }
  });

  const toggleTheme = () => {
    if (theme.title === "dark") {
      setTheme(light);
      localStorage.setItem("@weather-app:theme", JSON.stringify(light));
    } else {
      setTheme(dark);
      localStorage.setItem("@weather-app:theme", JSON.stringify(dark));
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ThemeContext.Provider>
  );
};

function useThemeEdit(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useThemeEdit };
