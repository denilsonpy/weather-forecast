import { FormEvent, useState } from "react";
import { Box, Flex, Link, Spacer } from "@chakra-ui/layout";
import { FormControl } from "@chakra-ui/form-control";
import { Input, Spinner } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "@chakra-ui/system";
import { Button } from "@chakra-ui/button";
import { FaSearch } from "react-icons/fa";
import { useWeather } from "../../hooks/weather";
import { useThemeUI } from "../../hooks/theme";
import { useLoading } from "../../hooks/loading";

import { toast } from "react-toastify";

export default function Header() {
  const [search, setSearch] = useState("");
  const { getWeather } = useWeather();
  const { loading, setLoading } = useLoading();
  const { toggleTheme } = useThemeUI();
  const theme = useTheme();

  const handleGetWeather = async (event: FormEvent) => {
    event.preventDefault();
    if (!search) return;
    try {
      setLoading(true);
      await getWeather(search);
      setLoading(false);
    } catch (err) {
      toast.error(`I couldn't find ${search}`, {
        position: "bottom-right",
        draggable: false,
        pauseOnHover: false,
      });
      setLoading(false);
    }
  };

  return (
    <Flex maxWidth="1000" marginY="15" marginX="auto">
      <Box p="4" color={theme.colors.secondary}>
        <form onSubmit={(event) => handleGetWeather(event)}>
          <FormControl display="inline-flex" gridGap={2}>
            <Input
              type="text"
              placeholder="City or country"
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
              fontSize={20}
              disabled={false}
              spinner={<Spinner />}
              isLoading={loading}
            >
              <FaSearch />
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
        gridGap="5"
      >
        <MdLightMode
          color={theme.colors.secondary}
          fontSize={35}
          aria-label="Search database"
          onClick={toggleTheme}
        />

        <Link
          href="https://github.com/denilsonpy/weather-forecast-app"
          isExternal
          fontSize={35}
          color={theme.colors.secondary}
        >
          <BsGithub />
        </Link>
      </Box>
    </Flex>
  );
}
