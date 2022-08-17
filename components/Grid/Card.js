import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Tooltip } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
        •
  </Box>
);

const card = (props) => {
  return (<>
    <CardContent>
      <Typography sx={{ fontSize: (props.alignment === "large" ? 14 : 12) }} color="text.secondary" gutterBottom>
        {props.symbol} | Score: {props.score} <Tooltip sx={{ verticalAlign: "text-bottom" }}
          title="Literpris / Alkoholprosent = Score"
          arrow placement="right-end"><HelpOutlineIcon fontSize="font" color="inherit"/></Tooltip>
      </Typography>

      <Typography variant={(props.alignment === "large" ? "h5" : "h6")} component="div">
        {props.title}
      </Typography>

      <Typography variant="body2" color="text.primary">
        {props.abv} {bull} {props.volume} {bull}Kr {props.price},-
      </Typography>

      {props.alignment === "large" &&
        <Typography variant="body2">
          {props.description}
          <br />
        </Typography>
      }

    </CardContent>

    <CardActions>
      <Button size="small">Kjøp på {props.distributor}</Button>
    </CardActions>
  </>);
};

export default function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 500 }}>
      <Card variant="outlined">{card(props)}</Card>
    </Box>
  );
}
