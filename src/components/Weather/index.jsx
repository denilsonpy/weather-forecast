import React from "react";
import { Box, Grid, Heading, Text } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import WeatherIcon from "../WeatherIcon";

interface IWeatherInterface {
  weather: Object;
  loading: boolean;
}

export default function WeatherInfo({ weather, loading }: IWeatherInterface) {
  const theme = useTheme();
  const icon = !!weather.name && weather.weather[0].icon;

  console.log(weather);
  return (
    <>
      {loading ? (
        <Text color="gray.500" isTruncated>
          Please enter a city
        </Text>
      ) : (
        <>
          <Heading
            as="h1"
            fontSize="4xl"
            color={theme.colors.tertiary}
            isTruncated
          >
            {!!weather.name && weather.name}{" "}
            {!!weather.name && weather.sys.country}
          </Heading>
          <Heading
            as="h2"
            fontSize="8xl"
            padding={10}
            color={theme.colors.secondary}
            isTruncated
          >
            {!!weather.name && `${Math.round(weather.main.temp * 10) / 10}°`}
          </Heading>
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={8}
            color={theme.colors.tertiary}
          >
            <Text fontSize="2xl">
              {!!weather.name &&
                `${Math.round(weather.main.temp_max * 10) / 10}°`}
              <ArrowUpIcon />
            </Text>
            <Text fontSize="2xl">
              {!!weather.name &&
                `${Math.round(weather.main.temp_min * 10) / 10}°`}
              <ArrowDownIcon />
            </Text>
          </Grid>
          <Box color={theme.colors.secondary} fontSize="9xl" p={5}>
            <WeatherIcon icon_tag={icon} />
          </Box>
          <Text fontSize="xl" color={theme.colors.tertiary} textAlign="center">
            {!!weather.name && weather.weather[0].description}
          </Text>
        </>
      )}
    </>
  );
}
