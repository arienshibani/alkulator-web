import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ToggleButtonGroup } from "@mui/material";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import ViewListIcon from "@mui/icons-material/ViewList";
import ToggleButton from "@mui/material/ToggleButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import OutlinedInput from "@mui/material/OutlinedInput";
import Slider from '@mui/material/Slider';
import Card from "./Card";

export default function FullWidthGrid() {
  const [alignment, setAlignment] = useState("large");
  const [age, setAge] = useState("Billigst");
  const [alcoholTypesSelected, setAlcoholTypesSelected] = useState([]);

  // Used for alcohol type selection:
  const listOfAlcoholTypes = [
    "Øl 🍺",
    "Cider 🍏",
    "Brennevin 🥃",
    "Rødvin 🍷",
    "Hvitvin 🥂",
    "Sterkvin 🍾",
    "Rosévin 🍷",
    "Fruktvin 🍹",
    "Aromatisert vin 🌸",
    "Perlende 🍸",
    "Mjød 🐝",
    "Musserende 🍾",
    "Sake 🍶",
  ];

  const ITEM_HEIGHT = 408;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleAlcoholTypeSelection = (event) => {
    const {
      target: { value },
    } = event;
    setAlcoholTypesSelected(value);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleSort = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>

        <FormControl sx={{ m: 1, width: "25vh" }}>
          <InputLabel>Filtrer på type</InputLabel>
          <Select
            label="Filtrer på type"
            onChange={handleAlcoholTypeSelection}
            multiple
            value={alcoholTypesSelected}
            input={<OutlinedInput label="Filtrer på type" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {listOfAlcoholTypes.map((alcoholType) => (
              <MenuItem key={alcoholType} value={alcoholType}>
                <Checkbox checked={alcoholTypesSelected.indexOf(alcoholType) > -1} />
                <ListItemText primary={alcoholType} />
              </MenuItem>))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: "120px" }}>
          <InputLabel>Sortér på</InputLabel>
          <Select
            value={age}
            label="Sortér på"
            onChange={handleSort}
          >
            <MenuItem value={"Billigst"}>Billigst</MenuItem>
            <MenuItem value={"Dyrest"}>Dyrest</MenuItem>
          </Select>
        </FormControl>

        <ToggleButtonGroup
          sx={{ height: "3.5em", marginTop: "8px" }}
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment">
          <ToggleButton value="compact" aria-label="left aligned">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="large" aria-label="centered">
            <ViewAgendaIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Grid
        container
        spacing={1}
      >
        <Grid item xs={12} md={10}>
          <Card />
        </Grid>
        <Grid item xs={12} md={10}>
          <Card />
        </Grid>
        <Grid item xs={12} md={10}>
          <Card />
        </Grid>
      </Grid>

    </Box>
  );
}
