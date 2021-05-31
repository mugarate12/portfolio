import type { AppProps } from 'next/app'

import { ThemeContextWrapper } from './../context/theme'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextWrapper>
      <Component {...pageProps} />
    </ThemeContextWrapper>
  )
}

export default MyApp
