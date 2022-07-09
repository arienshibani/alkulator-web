import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
        •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Category | Score: 420.69
      </Typography>
      <Typography variant="h5" component="div">
                69%{bull}33 centiliter{bull}Kr 27,00
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.primary">
                adjective
      </Typography>
      <Typography variant="body2">
                Tørket frukt, malt, krydder og lys karamell.
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Kjøp på Vinmonopolet</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
