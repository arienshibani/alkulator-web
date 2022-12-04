import * as React from "react";
import Head from "next/head";
import { yellow, blue } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

// Components
import BlogPost from "../../components/BlogPost/BlogPost";
import AppBar from "/components/NavBar/AppBar";
import { Box } from "@mui/material";

export default function RenderBlog(blogPostsFromDB) {
  const [mode, setMode] = useState("light");

  console.log(blogPostsFromDB);

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: green[200],
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

      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5rem",
        gap: "1rem",

      }}>

        {blogPostsFromDB.blogPostsFromDB.map((post) => {
          return (<BlogPost
            key={post._id}
            content={post.content}
            title={post.title}
            url={post.url}
            timestamp={post.timestamp}
            img={post.img}
            subTitle={post.subTitle}/>);
        })}

      </Box>

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
    let blogPostsFromDB = await response.json();

    return {
      props: { blogPostsFromDB: JSON.parse(JSON.stringify(blogPostsFromDB)) },
    };
  } catch (e) {
    console.error(e);
  } return {
    props: { posts: "No posts" },
  };
}
