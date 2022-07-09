import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Card from "./Card";

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card />
        </Grid>
      </Grid>
    </Box>
  );
}
