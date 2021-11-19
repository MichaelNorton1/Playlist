import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Display = ({ mySetlist, deleteHandler }) => {
  return (
    <Paper
      sx={{
        m: 2,
        borderRadius: 10,
        height: 240,
        background: "linear-gradient(to right bottom, white, #0000)",
      }}
    >
      {mySetlist.length > 0 ? (
        mySetlist.map((set) => {
          return (
            <Accordion key={set.band}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-content"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>{set.band}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Button
                  onClick={() => {
                    deleteHandler(set.band);
                  }}
                  color="error"
                  endIcon={<DeleteForeverIcon />}
                >
                  {" "}
                  Delete from setlist
                </Button>
                {set.set.map((value, index) => (
                  <ListItemButton key={value} divider>
                    <ListItem key={value} disableGutters>
                      <ListItemText primary={index + 1 + ". " + value} />
                    </ListItem>
                  </ListItemButton>
                ))}
              </AccordionDetails>
            </Accordion>
          );
        })
      ) : (
        <Box sx={{}}>
          <Typography justifyContent="center" textAlign="center" width="100%">
            {" "}
            Search and add artists to your Playlist!
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default Display;
