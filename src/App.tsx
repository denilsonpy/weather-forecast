import { Box } from "@chakra-ui/layout";
import { ThemeProvider } from "./hooks/theme";
import { useTheme } from "@chakra-ui/system";
import Dashboad from "./pages/Dashboard";

export default function App() {
  return (
    <ThemeProvider>
      <Dashboad />
    </ThemeProvider>
  );
}
