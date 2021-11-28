import React from "react";
import {
  WiCloud,
  WiCloudy,
  WiDayCloudy,
  WiDayRainWind,
  WiDaySleetStorm,
  WiDaySunny,
  WiDust,
  WiNightAltCloudy,
  WiNightAltHail,
  WiNightAltSleetStorm,
  WiNightClear,
  WiRainWind,
} from "react-icons/wi";
import { FaRegSnowflake } from "react-icons/fa";

interface IWeatherIconProps {
  icon_tag: string;
}

export default function WeatherIcon({ icon_tag }: IWeatherIconProps) {
  return (
    <>
      {icon_tag === "01d" && <WiDaySunny />}
      {icon_tag === "01n" && <WiNightClear />}
      {icon_tag === "02d" && <WiDayCloudy />}
      {icon_tag === "02n" && <WiNightAltCloudy />}
      {icon_tag === "03d" && <WiCloud />}
      {icon_tag === "03n" && <WiCloud />}
      {icon_tag === "04d" && <WiCloudy />}
      {icon_tag === "04n" && <WiCloudy />}
      {icon_tag === "09d" && <WiRainWind />}
      {icon_tag === "09n" && <WiRainWind />}
      {icon_tag === "10d" && <WiDayRainWind />}
      {icon_tag === "10n" && <WiNightAltHail />}
      {icon_tag === "11d" && <WiDaySleetStorm />}
      {icon_tag === "11n" && <WiNightAltSleetStorm />}
      {icon_tag === "13d" && <FaRegSnowflake />}
      {icon_tag === "13n" && <FaRegSnowflake />}
      {icon_tag === "50d" && <WiDust />}
      {icon_tag === "50n" && <WiDust />}
    </>
  );
}
