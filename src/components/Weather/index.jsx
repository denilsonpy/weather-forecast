import React from "react";
import { Box, Grid, Heading, Link, Text } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import WeatherIcon from "../WeatherIcon";
import { useWeather } from "../../hooks/weather";

export default function WeatherInfo() {
  const theme = useTheme();
  const { weather } = useWeather();

  const icon = !!weather && weather.weather[0].icon;

  return (
    <>
      {!weather ? (
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
            <Link
              href={`http://www.google.com/maps/place/${weather.coord.lat},${weather.coord.lon}`}
              isExternal
              fontSize={40}
              color={theme.colors.secondary}
            >
              {weather.name} {weather.sys.country}
              <ExternalLinkIcon mx="2px" fontSize={20} marginBottom={5} />
            </Link>
          </Heading>
          <Heading
            as="h2"
            fontSize="8xl"
            padding={10}
            color={theme.colors.secondary}
            isTruncated
          >
            {Math.round(weather.main.temp * 10) / 10}°
          </Heading>
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={8}
            color={theme.colors.tertiary}
          >
            <Text fontSize="2xl">
              {Math.round(weather.main.temp_max * 10) / 10}°
              <ArrowUpIcon />
            </Text>
            <Text fontSize="2xl">
              {Math.round(weather.main.temp_min * 10) / 10}°
              <ArrowDownIcon />
            </Text>
          </Grid>
          <Box color={theme.colors.secondary} fontSize="9xl" p={5}>
            <WeatherIcon icon_tag={icon} />
          </Box>
          <Text fontSize="xl" color={theme.colors.tertiary} textAlign="center">
            {weather.weather[0].description}
          </Text>
        </>
      )}
    </>
  );
}
