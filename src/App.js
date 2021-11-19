import { AppBar, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
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

  const deleteHandler = (band) => {
    console.log(mySetlist);
    const filtered = mySetlist.filter((set) => set.band !== band);
    setMySetlist(filtered);
  };

  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />

      <Nav></Nav>

      <Menu setMySetlist={setMySetlist}></Menu>
      <Display mySetlist={mySetlist} deleteHandler={deleteHandler}></Display>
    </ThemeProvider>
  );
}

export default App;
