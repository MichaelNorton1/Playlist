import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const { Paper, Grid, Typography, TextField, Button } = require("@mui/material");

const Menu = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const showSearch = () => {
    show ? setShow(false) : setShow(true);
  };
  console.log(search);
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-evenly"
      columnSpacing={2}
      sx={{ height: "100%", background: "black" }}
    >
      <Grid item>
        <Paper sx={{ p: 1 }}>
          <TextField
            sx={{ pa: 2 }}
            label="Search for Band"
            onChange={(e) => setSearch(e.target.value)}
            onClick={() => {
              showSearch();
            }}
          ></TextField>
          {show ? (
            <Button>
              <SearchIcon onClick={() => showSearch()}></SearchIcon>
            </Button>
          ) : (
            <div></div>
          )}
          <Typography></Typography>
        </Paper>
      </Grid>
      <Grid item>
        <Paper sx={{ p: 1, height: 72, width: 210 }}>
          <Typography>My Plalists</Typography>
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
