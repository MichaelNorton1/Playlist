import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Results from "./Results";
import { useTheme } from "@emotion/react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function SearchModal({ setPlaylists, playlist }) {
  // state and togglers
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [year, setYear] = useState("");
  const [open, setOpen] = useState(false);
  const [singleSearch, setSingleSearch] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSearch("");
    setSingleSearch("");
    setShow(false);
  };

  // getting theme
  const theme = useTheme();

  // Fetching functions
  const getBands = async () => {
    const formatBand = search.replace(" ", "-");
    if (search.length === 0 || year.length === 0) {
      return;
    } else {
      const set = await fetch("http://localhost:3001/band", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ band: formatBand, yearOf: year }),
      }).then((response) => response.json());

      const sets = await set.map((element) => element.sets.set);
      return sets;
    }
  };

  const changingData = async () => {
    const stuff = await getBands();
    if (stuff) {
      setShow(true);

      const filter = stuff.filter((element) => element.length > 0);
      let z = [];
      for (let x of filter) {
        z.push(...x);
      }

      let final = [];
      for (let g of z) {
        for (let songs of g.song) {
          if (!final.includes(songs.name)) {
            final.push(songs.name);
          }
        }
      }
      setSingleSearch(final);
      setPlaylists((previous) => {
        if (previous.length > 0) return [...previous, singleSearch];
        else {
          return [singleSearch];
        }
      });
    }
  };

  return (
    <div>
      <div>
        <Button sx={{ color: "black" }} onClick={handleOpen}>
          Search For Artists
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {!show ? (
              <div>
                <TextField
                  sx={{ pa: 2 }}
                  label="Search for Band"
                  onChange={(e) => setSearch(e.target.value)}
                ></TextField>
                <TextField
                  sx={{ pa: 2 }}
                  label="Year"
                  onChange={(e) => setYear(e.target.value)}
                ></TextField>
                <Button>
                  <SearchIcon
                    fontSize="large"
                    onClick={() => changingData()}
                  ></SearchIcon>
                </Button>
              </div>
            ) : (
              <Box>
                <Typography
                  textAlign="center"
                  sx={{
                    background: theme.palette.background.default,
                    borderRadius: 25,
                  }}
                  variant="h4"
                >
                  {search}
                </Typography>
                <Results singleSearch={singleSearch}></Results>
              </Box>
            )}
          </Box>
        </Modal>
      </div>
    </div>
  );
}
export default SearchModal;
