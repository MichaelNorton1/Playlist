import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Nav from "../src/components/Nav.js";
import Menu from "../src/components/Menu";

import "./App.css";
import Display from "./components/Display.js";
import { useState } from "react";
const themeLight = createTheme({
  palette: {
    background: {
      default: "#ABCED2",
    },
  },
});
function App() {
  const [mySetlist, setMySetlist] = useState([]);
  console.log(mySetlist);

  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <Nav></Nav>
      <Menu setMySetlist={setMySetlist}></Menu>
      <Display mySetlist={mySetlist}></Display>
    </ThemeProvider>
  );
}

export default App;
