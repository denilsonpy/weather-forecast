import { ChakraProvider } from "@chakra-ui/react";
import React, { useContext, useState, createContext } from "react";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

interface IThemeContext {
  toggleTheme(): void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("@weather-app:theme");
    if (savedTheme) return JSON.parse(savedTheme);
    return light;
  });

  const toggleTheme = () => {
    switch (theme.title) {
      case "light":
        setTheme(dark);
        localStorage.setItem("@weather-app:theme", JSON.stringify(dark));
        break;

      default:
        setTheme(light);
        localStorage.setItem("@weather-app:theme", JSON.stringify(light));
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ThemeContext.Provider>
  );
};

function useThemeUI(): IThemeContext {
  const context = useContext(ThemeContext);
  return context;
}

export { ThemeProvider, useThemeUI };
