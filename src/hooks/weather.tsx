import React, { useContext, useState, createContext } from "react";

interface IWeatherContext {
  setWeather: Function;
  weather:
    | {
        name: string;
        icon: string;
        temp: string;
        temp_max: string;
        temp_min: string;
      }
    | undefined;
}

const WeatherContext = createContext<IWeatherContext>({} as IWeatherContext);

const WeatherProvider: React.FC = ({ children }) => {
  const [weather, setWeather] = useState();

  return (
    <WeatherContext.Provider value={{ setWeather, weather }}>
      {children}
    </WeatherContext.Provider>
  );
};

function useWeather(): IWeatherContext {
  const context = useContext(WeatherContext);

  return context;
}

export { WeatherProvider, useWeather };
