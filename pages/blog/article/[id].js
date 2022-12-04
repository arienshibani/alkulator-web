import { useRouter } from "next/router";
import Head from "next/head";
import NextLink from "next/link";

import * as React from "react";
import { useState } from "react";
import { yellow, blue } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Components
// import BlogPost from "../../components/BlogPost/BlogPost";
import AppBar from "/components/NavBar/AppBar";
import BlogPost from "../../../components/BlogPost/BlogPost";
import { Box, Typography, Card, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export default function RenderBlog(post) {
  const router = useRouter();
  const [mode, setMode] = useState("light");

  console.log("🔥🔥🔥", post);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
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

  const renderArticleIfItExists = (post, router) => {
    if (post === false) {
      return <BlogPost
        key={post.post._id}
        content={post.post.content}
        title={post.post.title}
        timestamp={post.post.timestamp}
        img={post.post.img}
        subTitle={post.post.subTitle} />;
    }
    return <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

        </Typography>
        <Typography variant="h5" component="div">
    404{bull}Not{bull}Found
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Fant ikke artikkelen.. 🤔
        </Typography>
        <Typography variant="body2">

          <i> {bull} {router.asPath}</i>
        </Typography>
        <NextLink href="/">
          <Button>Tilbake</Button>
        </NextLink>
      </CardContent>
    </Card>;
  };

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
        {renderArticleIfItExists(post, useRouter())}
      </Box>

      <style jsx global>{`
        body {
          background: ${theme.palette.mode === "dark" ? "darkslategray" : "antiquewhite"};
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    // Call external API from here directly
    const res = await fetch(`http://localhost:3000/api/blog/getPost?url=${params.id}`);
    const data = await res.json();

    return {
      props: { post: data },
    };
  } catch (error) {
    console.error(error);
  }
  return {
    props: { post: false },

  };
}
