import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
