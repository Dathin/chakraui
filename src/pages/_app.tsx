import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import React from 'react'
import { Header } from '../components/Header'
import { HeaderProvider } from '../contexts/HeaderContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider>
    <HeaderProvider>
      <Header />
      <Component {...pageProps} />
    </HeaderProvider>
  </ChakraProvider>  )
}
export default MyApp
