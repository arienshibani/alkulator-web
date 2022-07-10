import React, { useState, useMemo } from "react";
import Head from "next/head";
import { yellow, blue } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Components
import AppBar from "/components/NavBar/AppBar";
import Grid from "/components/Grid/Grid";

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export default function App() {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

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
        <meta charset="UTF-8" />
        <meta name="description" content="Mer rus for pengene." />
        <meta name="keywords" content="Vinmonopolet, Alkiskalkis, Alkulator" />
        <meta name="author" content="Arien Shibani" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ColorModeContext.Provider value={colorMode}>

        <ThemeProvider theme={theme}>

          <AppBar setMode={setMode} mode={mode} />

          <br />
          <br />
          <Grid />
        </ThemeProvider>
      </ColorModeContext.Provider>

      <style jsx global>{`
        body {
          background: ${theme.palette.mode === "dark" ? "darkslategray" : "antiquewhite"};
        }
      `}</style>
    </>
  );
}
