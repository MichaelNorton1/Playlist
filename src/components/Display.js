import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Display = ({ mySetlist }) => {
  return (
    <Paper>
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
        <div> Search and bands to your Playlist!</div>
      )}
    </Paper>
  );
};

export default Display;
