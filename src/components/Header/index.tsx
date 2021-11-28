import React, { FormEvent, useState } from "react";
import { Box, Flex, Link, Spacer } from "@chakra-ui/layout";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { useTheme } from "@chakra-ui/system";
import { Button, IconButton } from "@chakra-ui/button";
import { SunIcon, MoonIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useThemeEdit } from "../../hooks/theme";
import axios from "axios";

interface IHeaderProps {
  setWeather: Function;
  setLoading: Function;
}

export default function Header({ setWeather, setLoading }: IHeaderProps) {
  const theme = useTheme();
  const [search, setSearch] = useState("London");
  const { toggleTheme } = useThemeEdit();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?APPID=647af146a27092f5e871d42bfb4c670c&q=${search}&units=metric`
      );
      const data = response.data;
      setLoading(false);
      setWeather(data);
    } catch (e) {}
  };

  return (
    <Flex maxWidth="1000" marginY="15" marginX="auto">
      <Box p="4" color={theme.colors.secondary}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <FormControl display="inline-flex" gridGap={2}>
            <Input
              type="text"
              placeholder="Enter the city here"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              bg={theme.colors.primary}
              border="3px solid"
              maxWidth={250}
              borderColor={theme.colors.secondary}
              color={theme.colors.secondary}
              fontSize={20}
            />
            <Button
              bg={theme.colors.secondary}
              color={theme.colors.primary}
              type="submit"
            >
              <ArrowRightIcon />
            </Button>
          </FormControl>
        </form>
      </Box>
      <Spacer />
      <Box
        p="4"
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        gridGap="10"
      >
        <IconButton
          bg={theme.colors.secondary}
          color={theme.colors.primary}
          aria-label="Search database"
          icon={theme.title === "dark" ? <SunIcon /> : <MoonIcon />}
          onClick={toggleTheme}
        />
        <Link
          href="https://github.com/denilsonpy/weather-forecast-app"
          isExternal
          display="inline-flex"
          justifyContent="center"
          alignItems="center"
          fontSize="40"
          color={theme.colors.secondary}
        >
          <BsGithub />
        </Link>
      </Box>
    </Flex>
  );
}
