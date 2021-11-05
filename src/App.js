import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Nav from "../src/components/Nav.js";
import Menu from "../src/components/Menu";

import "./App.css";
const themeLight = createTheme({
  palette: {
    background: {
      default: "#ABCED2",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <Nav></Nav>
      <Menu></Menu>
    </ThemeProvider>
  );
}

export default App;
