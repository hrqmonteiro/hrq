import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero } from 'components/sections'
import { Container, Navbar } from 'components/ui'
import TypeIt from 'typeit-react'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Software Developer from Brazil | Henrique Monteiro</title>
      </Head>

      <Navbar />

      <Container>
        <Hero>
          <h1 className='hone font-mono'>
            Hi, i{"'"}m Henrique,
            <br />a{' '}
            <TypeIt
              options={{ loop: true }}
              getBeforeInit={(instance: any) => {
                instance
                  .type('Software Developer')
                  .pause(750)
                  .delete(18)
                  .pause(750)
                  .type('Front-end Engineer')
                return instance
              }}
            />
            <br />
            based in Brazil.
          </h1>
        </Hero>
      </Container>
    </>
  )
}

export default HomePage
