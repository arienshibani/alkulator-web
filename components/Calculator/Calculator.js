import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import PercentageIcon from "@mui/icons-material/Percent";
import PriceIcon from "@mui/icons-material/MonetizationOn";
import ResultIcon from "@mui/icons-material/Calculate";
import SportsBarOutlinedIcon from "@mui/icons-material/SportsBar";

const Input = styled(MuiInput)`
  width: 47px;
`;

export default function InputSlider() {
  const [abvPercentage, setabvPercentage] = React.useState(19);
  const [litrePrice, setLitrePrice] = React.useState(300);

  const handleAbvSliderChange = (event, newValue) => {
    setabvPercentage(newValue);
  };

  const handleLitrePriceSliderChange = (event, newValue) => {
    setLitrePrice(newValue);
  };

  const handleAbvInputChange = (event) => {
    setabvPercentage(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleLitrePriceInputChange = (event) => {
    setLitrePrice(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleAbvBlur = () => {
    if (abvPercentage < 0) {
      setabvPercentage(1);
    } else if (abvPercentage > 100) {
      setabvPercentage(100);
    }
  };

  const handleLitrePriceBlur = () => {
    if (litrePrice < 0) {
      setLitrePrice(1);
    } else if (litrePrice > 2000) {
      setLitrePrice(2000);
    }
  };

  return (
    <>
      <Typography variant="h2">
        Alkis Kalkis
      </Typography>
      <Typography variant="body1" >
        Juster verdiene under for å manuelt beregne scoren på drikkevarer.
      </Typography>
      <Typography variant="body1">
        En lav score indikerer høy kostnadseffektivitet.
      </Typography>
      <br></br>
      <Box sx={{ width: 250 }}>
        <Typography id="input-slider" gutterBottom sx={{ textAlign: "center" }}>
        Alkoholprosent
        </Typography>
        <Grid container spacing={2} alignItems="center">

          <Grid item xs>
            <Slider
              value={typeof abvPercentage === "number" ? abvPercentage : 0}
              onChange={handleAbvSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <Input
              value={abvPercentage}
              size="small"
              onChange={handleAbvInputChange}
              onBlur={handleAbvBlur}
              inputProps={{
                step: 10,
                min: 1,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
          <Grid item>
            <PercentageIcon />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: 250 }}>
        <Typography id="input-slider" gutterBottom sx={{ textAlign: "center" }}>
        Literpris
        </Typography>
        <Grid container spacing={2} alignItems="center">

          <Grid item xs>
            <Slider
              value={typeof litrePrice === "number" ? litrePrice : 0}
              onChange={handleLitrePriceSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <Input
              value={litrePrice}
              size="small"
              onChange={handleLitrePriceInputChange}
              onBlur={handleLitrePriceBlur}
              inputProps={{
                step: 10,
                min: 1,
                max: 1000,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
          <Grid item>
            <PriceIcon />
          </Grid>
        </Grid>

        <br></br>

        <Typography id="input-slider" variant="h5">
         Score
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <ResultIcon />
          </Grid>

          <Grid item>
            <Input
              value={Math.round((Number(litrePrice / abvPercentage) + Number.EPSILON) * 100) / 100}
              disabled
            />
          </Grid>
        </Grid>
      </Box>
    </>

  );
}
