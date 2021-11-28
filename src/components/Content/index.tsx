import React from "react";
import { Container } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/react";
import WeatherInfo from "../Weather";

interface IContentProps {
  loading: boolean;
  weather: Object;
}

export default function Content({ loading, weather }: IContentProps) {
  const theme = useTheme();

  return (
    <Container centerContent fontSize="25" color={theme.colors.tertiary} p={10}>
      <WeatherInfo loading={loading} weather={weather} />
    </Container>
  );
}
