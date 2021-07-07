import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { Header } from "../components/Header";
import { HeaderProvider } from "../contexts/HeaderContext";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <HeaderProvider>
          <Header />
          <Component {...pageProps} />
        </HeaderProvider>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
