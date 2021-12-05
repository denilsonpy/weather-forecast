import Header from "../../components/Header";
import Content from "../../components/Content";
import { Box } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/system";
import { WeatherProvider } from "../../hooks/weather";
import { LoadingProvider } from "../../hooks/loading";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const theme = useTheme();

  return (
    <WeatherProvider>
      <ToastContainer />
      <LoadingProvider>
        <Box bg={theme.colors.primary} w="100%" h="100%" p={4}>
          <Header />
          <Content />
        </Box>
      </LoadingProvider>
    </WeatherProvider>
  );
}
