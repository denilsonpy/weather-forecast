import { ThemeProvider } from "./hooks/theme";
import Dashboad from "./pages/Dashboard";

export default function App() {
  return (
    <ThemeProvider>
      <Dashboad />
    </ThemeProvider>
  );
}
