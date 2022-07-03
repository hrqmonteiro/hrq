import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero } from 'components/sections'
import { Container, Navbar } from 'components/ui'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Software Developer from Brazil | Henrique Monteiro</title>
      </Head>

      <Navbar />

      <Container>
        <Hero>
          <h1 className='hone'>
            Hi, i{"'"}m Henrique,
            <br />a software developer based in Brazil.
          </h1>
        </Hero>
      </Container>
    </>
  )
}

export default HomePage
