import { Grid, Paper, Typography, Slide } from "@mui/material";
import { useEffect, useState } from "react";

const Nav = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Grid container justifyContent="center" sx={{ p: 4 }}>
      <Grid item xs={3}>
        <Slide
          direction="right"
          in={checked}
          style={{ transitionDelay: "300ms" }}
          mountOnEnter
          unmountOnExit
        >
          {
            <Paper
              sx={{
                borderRadius: 16,
                width: 240,
                height: 50,
                boxShadow: 4,
                ":hover": { boxShadow: 15 },
              }}
              variant="outlined"
            >
              <Typography align="center" sx={{ p: 1.5 }}>
                Make My Concert
              </Typography>
            </Paper>
          }
        </Slide>
      </Grid>
    </Grid>
  );
};

export default Nav;
