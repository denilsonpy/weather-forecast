import React, { useState } from "react";
import Header from "../../components/Header";
import Content from "../../components/Content";
import { Box } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/system";

export default function Dashboard() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  return (
    <Box bg={theme.colors.primary} w="100%" h="100%" p={4}>
      <Header setWeather={setWeather} setLoading={setLoading} />
      <Content weather={weather} loading={loading} />
    </Box>
  );
}
