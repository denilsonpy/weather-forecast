import { ThemeProvider } from "./hooks/theme";
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
