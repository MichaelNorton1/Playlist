import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export default function Results({ singleSearch }) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        overflow: "auto",
        maxHeight: 300,
      }}
    >
      {singleSearch.length > 0 ? (
        singleSearch.map((value, index) => (
          <ListItemButton divider>
            <ListItem key={value} disableGutters>
              <ListItemText primary={index + 1 + ". " + value} />
            </ListItem>
          </ListItemButton>
        ))
      ) : (
        <div></div>
      )}
    </List>
  );
}
