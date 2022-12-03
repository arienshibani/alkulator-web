/* eslint-disable consistent-return */
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
import Slider from "@mui/material/Slider";
import Divider from "@mui/material/Divider";
import Card from "./Card";

export default function FullWidthGrid() {
  const [alignment, setAlignment] = useState("large");
  const [sortMode, setSortMode] = useState("Billigst");
  const [alcoholTypesSelected, setAlcoholTypesSelected] = useState([]);
  const [distributorsSelected, setDistributorsSelected] = useState(["Vinmonopolet"]);
  const [abvPercentage, setabvPercentage] = React.useState([0, 100]);
  const [searchResult, setSearchResult] = useState([

    {
      productName: "Northern Monk Jule Heathen Festive Milkshake IPA",
      category: "Øl",
      price: "Kr 87,20",
      volume: "44 centiliter",
      alcoholPercentage: "7.2%",
      score: 27.525,
      thumbnail: "https://bilder.vinmonopolet.no/cache/96x96-0/13863902-1.jpg",
      altText: "Northern Monk Jule Heathen Festive Milkshake IPA",
      link: "https://www.vinmonopolet.no/p/13863902",
      distributor: "Vinmonopolet",
    },
    {
      productName: "BRØL",
      category: "Øl",
      price: "Kr 40,00",
      volume: "33 centiliter",
      alcoholPercentage: "4.70%",
      score: 27.525,
      thumbnail: "https://bilder.kolonial.no/local_products/8870e654-2dd9-41fa-a91d-2d62d6f46273.jpeg?auto=format&fit=max&w=106&s=56917dbfabd0a395000280b32e500fef",
      altText: "BRØL",
      link: "https://oda.com/no/products/40208-oslo-brewing-company-brol/",
      distributor: "Oda",
    },
  ]);

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

  const listOfDistributors = [
    "Vinmonopolet",
    "Meny",
    "Joker",
    "Oda",
    "Gulating",
  ];

  const valueTextABVSlider = (value) => {
    return `${value}%`;
  };

  const alcoholSliderMarks = [
    {
      value: 0,
      label: `${abvPercentage[0]}%`,
    },
    {
      value: 100,
      label: `${abvPercentage[1]}%`,
    },
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

  const handleDistributorSelection = (event) => {
    const {
      target: { value },
    } = event;
    setDistributorsSelected(value);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleSort = (event) => {
    setSortMode(event.target.value);
    if (sortMode === "Billigst") {
      searchResult.sort((a, b) => (a.score < b.score) ? 1 : -1);
    } else {
      searchResult.sort((a, b) => (a.score > b.score) ? 1 : -1);
    }
  };

  const handleABVPercentageChange = (event, newValue) => {
    setabvPercentage(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>

      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Box sx={{ m: 1, width: 200, paddingRight: "10px", paddingLeft: "10px" }}>
          <InputLabel>
            Alkohol %
          </InputLabel>
          <Slider
            getAriaLabel={() => "Alcohol By Volume filter"}
            value={abvPercentage}
            onChange={handleABVPercentageChange}
            valueLabelDisplay="auto"
            marks={alcoholSliderMarks}
            getAriaValueText={valueTextABVSlider}
          />
        </Box>

        <FormControl sx={{ m: 1, width: "25vh" }}>
          <InputLabel>Filtrer På Leverandør</InputLabel>
          <Select
            label="Filtrer på Leverandør"
            onChange={handleDistributorSelection}
            multiple
            value={distributorsSelected}
            input={<OutlinedInput label="Filtrer på Leverandør" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {listOfDistributors.map((alcoholType) => (
              <MenuItem key={alcoholType} value={alcoholType}>
                <Checkbox checked={distributorsSelected.indexOf(alcoholType) > -1} />
                <ListItemText primary={alcoholType} />
              </MenuItem>))}
          </Select>
        </FormControl>

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
            value={sortMode}
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

      <Divider variant="middle" sx={{ marginBottom: "20px" }} />

      <Grid
        container
        spacing={1}
      >
        {searchResult
          .map((item) => (
            <Grid key={item.productName} item xs={12} md={10}>
              <Card alignment={alignment}
                score={item.score}
                alcoholPercentage={item.alcoholPercentage}
                description={item.description}
                thumbnail={item.thumbnail}
                altText={item.altText}
                link={item.link}
                volume={item.volume}
                productName={item.productName}
                price={item.price}
                category={item.category}
                distributor={item.distributor} />
            </Grid>))}
      </Grid>
    </Box>
  );
}
