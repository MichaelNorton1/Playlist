import { Grid, Paper, AppBar, Typography, Button } from "@mui/material";

const Nav = () => {
  return (
    <Grid
      container
      direction="columns"
      alignItems="center"
      justifyContent="center"
      sx={{ p: 4 }}
    >
      <Grid item xs={3}>
        <Button>
          <Paper
            sx={{ borderRadius: 16, width: 240, height: 50, boxShadow: 4 }}
            variant="outlined"
          >
            <Typography align="center" sx={{ p: 1.5 }}>
              Make My Concert
            </Typography>
          </Paper>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Nav;
