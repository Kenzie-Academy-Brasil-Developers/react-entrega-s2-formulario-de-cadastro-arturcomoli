import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import Form from "./pages/Form";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Form />
    </ThemeProvider>
  );
}

export default App;
