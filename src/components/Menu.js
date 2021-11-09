import { useState } from "react";

import SearchModal from "../components/SearchModal.js";
const { Paper, Grid, Button } = require("@mui/material");

const Menu = () => {
  const [playlist, setPlaylists] = useState([]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-evenly"
      columnSpacing={2}
      sx={{ height: 100, background: "black" }}
    >
      <Grid item>
        <Paper sx={{}}>
          <SearchModal
            playlist={playlist}
            setPlaylists={setPlaylists}
            sx={{ p: 1, height: 72, width: 210 }}
          ></SearchModal>
        </Paper>
      </Grid>

      <Grid item>
        <Paper>
          <Button sx={{ color: "black" }}>My Playlists</Button>
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
