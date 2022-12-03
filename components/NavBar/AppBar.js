import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import GitHubIcon from "@mui/icons-material/GitHub";
import LiquorIcon from "@mui/icons-material/Liquor";
import CalculateIcon from "@mui/icons-material/Calculate";
import Link from "@mui/material/Link";

export default function SearchAppBar(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const prevMode = props.mode;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            Alkulator
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>

          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={suggestions}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <IconButton
            onClick={() => props.setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))}
            sx={{ ml: 1 }}
            color="inherit">
            {prevMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

        </Toolbar>

        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} >
          <List sx={{ margin: "50px" }}>
            <ListItem button>
              <ListItemText primary="Hjem" />
              <LiquorIcon sx={{ marginLeft: "10px" }} />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Nyheter" />
              <NewspaperIcon sx={{ marginLeft: "10px" }} />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Alkulator" />
              <CalculateIcon sx={{ marginLeft: "10px" }} />
            </ListItem>

          </List>

          <Link
            underline="none" color="gray"
            href="https://github.com/arienshibani/alkulator-web">
            <List sx={{ margin: "50px", marginTop: "50vh" }}>
              <ListItem button >
                <ListItemText primary="Github" />
                <GitHubIcon sx={{ marginLeft: "10px" }} />
              </ListItem>
            </List>
          </Link>
        </Drawer>
      </AppBar>
    </Box >
  );
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const generateSuggestion = () => {
  const listOfSuggestions = ["Smirnoff", "Jack Daniels", "Jelzin Vodka", "Stolichnaya", "Bare Øl"];
  return listOfSuggestions[Math.floor(Math.random() * listOfSuggestions.length)];
};

const suggestions = generateSuggestion();
