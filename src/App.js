import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Nav from "../src/components/Nav.js";
import Menu from "../src/components/Menu";
import querystring from "query-string";
import getTrackUris from "../src/spotifyState/getTrackUris/getTrackUris";
import createPlaylist from "../src/spotifyState/createPlaylist/createPlaylist";
import addToPlaylist from "../src/spotifyState/addToPlaylist/addToPlaylist";
import getUserId from "../src/spotifyState/getUserId/getUserid";
import "./App.css";
import Display from "./components/Display.js";
import { useEffect, useState } from "react";
const themeLight = createTheme({
  palette: {
    background: {
      default: "#ABCED2",
    },
  },
});
function App() {
  const [mySetlist, setMySetlist] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);
  //
  useEffect(() => {
    let parsed = querystring.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken) {
      return;
    } else {
      setLoggedIn(true);
      setToken(accessToken);
      getUserId(setData, token);
    }
  }, [token]);

  const makePlaylist = (band) => {
    const create = mySetlist.filter((each) => each.band === band);
    createPlaylist(data, token, create).then((playlistID) =>
      addToPlaylist(token, playlistID, getTrackUris(token, create))
    );
  };

  const deleteHandler = (band) => {
    const filtered = mySetlist.filter((set) => set.band !== band);
    setMySetlist(filtered);
  };

  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />

      <Nav></Nav>

      <Menu
        setMySetlist={setMySetlist}
        loggedIn={loggedIn}
        mySetlist={mySetlist}
      ></Menu>
      <Display
        mySetlist={mySetlist}
        makePlaylist={makePlaylist}
        deleteHandler={deleteHandler}
      ></Display>
    </ThemeProvider>
  );
}

export default App;
