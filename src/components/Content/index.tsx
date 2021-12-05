import { Container } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/react";
import WeatherInfo from "../Weather";

export default function Content() {
  const theme = useTheme();

  return (
    <Container centerContent fontSize="25" color={theme.colors.tertiary} p={10}>
      <WeatherInfo />
    </Container>
  );
}
