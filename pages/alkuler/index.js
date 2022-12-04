import Head from "next/head";
import * as React from "react";

// Components
import Calculator from "../../components/Calculator/Calculator";
import AppBar from "/components/NavBar/AppBar";

export default function RenderBlog() {
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

      <AppBar></AppBar>

      <Calculator></Calculator>

    </>
  );
}
