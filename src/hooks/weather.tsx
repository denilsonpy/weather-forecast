import axios from "axios";
import React, { useContext, useState, createContext } from "react";

interface IWeatherContext {
  getWeather: Function;
  weather:
    | {
        name: string;
        icon: string;
        temp: string;
        temp_max: string;
        temp_min: string;
        coord: {
          lon: string;
          lat: string;
        };
      }
    | undefined;
}

const WeatherContext = createContext<IWeatherContext>({} as IWeatherContext);

const WeatherProvider: React.FC = ({ children }) => {
  const [weather, setWeather] = useState();

  const getWeather = async (city: string) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?APPID=0c0ad50ddf868106c02fd2a3357574e3&q=${city}&units=metric`
    );
    setWeather(data);
  };

  return (
    <WeatherContext.Provider value={{ getWeather, weather }}>
      {children}
    </WeatherContext.Provider>
  );
};

function useWeather(): IWeatherContext {
  const context = useContext(WeatherContext);

  return context;
}

export { WeatherProvider, useWeather };
