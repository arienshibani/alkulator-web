import * as React from "react";
import Head from "next/head";
import { yellow, blue } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

// Components
import Calculator from "../../components/Calculator/Calculator";
import AppBar from "/components/NavBar/AppBar";
import { Box } from "@mui/material";

export default function RenderBlog() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: blue[200],
      },
      secondary: {
        main: yellow[700],
      },
    },
  });

  return (
    <>
      <Head>
        <title>Alkulator.no</title>
        <meta property="og:title" content="Alkulator.no" key="title" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Mer rus for pengene." />
        <meta name="keywords" content="Vinmonopolet, Alkiskalkis, Alkulator" />
        <meta name="author" content="Arien Shibani" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <AppBar setMode={setMode} mode={mode} breadcrumbName="Alkis Kalkis" breadcrumbUrl="/alkuler"/>
      </ThemeProvider>

      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5rem",
        gap: "1rem",

      }}>

        <Calculator>  </Calculator>

      </Box>

      <style jsx global>{`
        body {
          background: ${theme.palette.mode === "dark" ? "darkslategray" : "antiquewhite"};
        }
      `}</style>
    </>
  );
}
