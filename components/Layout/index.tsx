import { ReactNode } from 'react'
import Head from 'next/head'

interface Props {
  children: ReactNode
}

export const siteTitle = 'Mat.dev'

export default function Layout({
  children
}: Props) {
  

  return (
    <>
      <Head>
        <link rel="icon" href="/icon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
        <meta
          name="Music"
          content="my content"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      { children }
    </>
  )
}
