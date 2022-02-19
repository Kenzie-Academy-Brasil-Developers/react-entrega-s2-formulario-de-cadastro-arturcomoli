import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import { CssBaseline } from "@mui/material";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
