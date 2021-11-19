import { useEffect, useState } from "react";
import querystring from "query-string";
import SearchModal from "../components/SearchModal.js";
import { Image } from "@mui/icons-material";
import pic from "../spotify.png";

const { Paper, Grid, Button, SvgIcon, Avatar, Icon } = require("@mui/material");

const Menu = ({ setMySetlist }) => {
  const [playlist, setPlaylists] = useState([]);
  const svgIcon = (
    <Icon>
      <img
        alt="edit"
        src="/Users/michaelnorton/Desktop/Portfolio/Playlist app/playlistapp/public/spotify.png"
      />
    </Icon>
  );
  const spotifyLogin = () => {
    // fetch("http://localhost:3001/login")
    //   .then((res) => console.log(res))
    //   .catch((error) => console.log(error));

    window.location = "http://localhost:8888/login";
  };

  useEffect(() => {
    let parsed = querystring.parse(window.location.search);
  }, []);

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
            Add to Spotify{" "}
          </Button>
        </Paper>
      </Grid>
      {/* <Grid item>
        <Paper sx={{ p: 2, height: 72, width: 210 }}>
          <Typography> </Typography>
        </Paper>
      </Grid> */}
    </Grid>
  );
};

export default Menu;
