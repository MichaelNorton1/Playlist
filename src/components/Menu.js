import { useState } from "react";

import SearchModal from "../components/SearchModal.js";

import pic from "../spotify.png";

const { Paper, Grid, Button, Avatar } = require("@mui/material");

const Menu = ({ setMySetlist, loggedIn }) => {
  const [playlist, setPlaylists] = useState([]);

  const spotifyLogin = () => {
    window.location = "http://localhost:8888/login";
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-evenly"
      columnSpacing={2}
      sx={{
        height: 100,
        background: "linear-gradient(to right bottom, white, #0000)",
        borderRadius: 24,
      }}
    >
      {" "}
      <Grid item>
        <Paper sx={{}}>
          <SearchModal
            loggedIn={loggedIn}
            setMySetlist={setMySetlist}
            playlist={playlist}
            setPlaylists={setPlaylists}
            sx={{ p: 1, height: 72, width: 210 }}
          ></SearchModal>
        </Paper>
      </Grid>
      <Grid item>
        <Paper>
          <Button
            onClick={() => {
              spotifyLogin();
            }}
            sx={{ color: "black" }}
            endIcon={<Avatar src={pic}></Avatar>}
          >
            Login to Spotify{" "}
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Menu;
