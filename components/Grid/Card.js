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

const card = (
  <>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                🍺 | Score: 420.69 <Tooltip
          sx={{ verticalAlign: "text-bottom" }}
          title="Literpris / Alkoholprosent = Score"
          arrow placement="right-end"><HelpOutlineIcon fontSize="font" color="inherit"/></Tooltip>
      </Typography>
      <Typography variant="h5" component="div">
               Nøgne Ø Trippel
      </Typography>

      <Typography variant="body2" color="text.primary">
         69%{bull}33 centiliter{bull}Kr 27,00
      </Typography>
      <Typography variant="body2">
                Tørket frukt, malt, krydder og lys karamell.
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Kjøp på Vinmonopolet</Button>
    </CardActions>
  </>
);

const compactCard = (
  <>
    <CardContent>
      <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                🍺 | Score: 410.69 <Tooltip
          sx={{ verticalAlign: "text-bottom" }}
          title="Literpris / Alkoholprosent = Score"
          arrow placement="right-end"><HelpOutlineIcon fontSize="font" color="inherit"/></Tooltip>
      </Typography>
      <Typography variant="h6" component="div">
               Nøgne Ø Trippel
      </Typography>

      <Typography variant="body2" color="text.primary">
         69%{bull}33 centiliter{bull}Kr 27,00
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Kjøp på Vinmonopolet</Button>
    </CardActions>
  </>
);

export default function OutlinedCard(props) {
  if (props.alignment === "compact") {
    return (
      <Box sx={{ minWidth: 275, maxWidth: 500 }}>
        <Card variant="outlined">{compactCard}</Card>
      </Box>
    );
  }
  return (
    <Box sx={{ minWidth: 275, maxWidth: 500 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
