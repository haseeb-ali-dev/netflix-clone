import type { NextPage } from "next"
import Head from "next/head"

import { Header } from "components"

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main> 
      </main>
    </div>
  )
}

export default Home
