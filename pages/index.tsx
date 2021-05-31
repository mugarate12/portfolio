import Head from 'next/head'

import {
  Content,
  Layout
} from './../components'

import {
  About,
  FoundMe,
  GitHubPosts,
  Header,
  MediumPosts,
  Profile
} from './../containers'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <Header />

      <Content>
        <Profile id='Profile' />

        <FoundMe id='FoundMe' />

        <About id='About' />

        <MediumPosts id='Medium' />

        <GitHubPosts id='Github' />
      </Content>
    </Layout>
  )
}
