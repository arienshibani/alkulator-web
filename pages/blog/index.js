import * as React from "react";
import Head from "next/head";
import { yellow, blue } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, useMemo } from "react";
// Components
import AppBar from "/components/NavBar/AppBar";

const renderBlogPost = (title, content) => {
  return (
    <div>
      <b>{title}</b>
      <p>{content}</p>
    </div>);
};

export default function BlogPost(posts) {
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
        <meta charSet="UTF-8" />
        <meta name="description" content="Mer rus for pengene." />
        <meta name="keywords" content="Vinmonopolet, Alkiskalkis, Alkulator" />
        <meta name="author" content="Arien Shibani" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <AppBar setMode={setMode} mode={mode} />
      </ThemeProvider>

      <div>
        {posts.posts.map(el => renderBlogPost(el.content, el.title))}
      </div>

      <style jsx global>{`
        body {
          background: ${theme.palette.mode === "dark" ? "darkslategray" : "antiquewhite"};
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  try {
    let response = await fetch("http://localhost:3000/api/blog/getPosts");
    let posts = await response.json();

    return {
      props: { posts: JSON.parse(JSON.stringify(posts)) },
    };
  } catch (e) {
    console.error(e);
  } return {
    props: { posts: "No posts" },
  };
}
