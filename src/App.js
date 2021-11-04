import {
  Backdrop,
  createMuiTheme,
  createTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from "@mui/material";
import Nav from "../src/components/Nav.js";

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
    </ThemeProvider>
  );
}

export default App;
