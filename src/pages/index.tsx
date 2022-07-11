import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { Hero } from 'components/sections'
import { Container, Navbar, Scroller, ThemeButton } from 'components/ui'
import Flag from 'react-flags'
import Tech from '@/components/sections/Tech/Tech'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Box = () => {
  const $box: any = useRef()

  useEffect(() => {
    gsap.to($box.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: $box.current,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinType: 'transform',
        scrub: true,
        pinSpacing: false
      }
    })
  }, [])

  return <div className='box' ref={$box} />
}

const HomePage: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const USAFlag = () => {
    return (
      <div className='flex items-center hover:opacity-70 transition-all duration-200'>
        <div className='mx-2'>
          <Flag
            name='USA'
            format='png'
            pngSize={24}
            shiny={false}
            alt='USA Flag'
            basePath='/images/flags'
          />
        </div>
      </div>
    )
  }

  const BRAFlag = () => {
    return (
      <div className='flex items-center hover:opacity-70 transition-all duration-200'>
        <div className='mx-2'>
          <Flag
            name='BRA'
            format='png'
            pngSize={24}
            shiny={false}
            alt='BRA Flag'
            basePath='/images/flags'
          />
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Software Developer from Brazil | Henrique Monteiro</title>
      </Head>

      <Navbar
        flag={router.locale === 'pt' ? <USAFlag /> : <BRAFlag />}
        locale={router.locale === 'pt' ? 'en' : 'pt'}
      />

      <Scroller>
        <Container>
          <Hero
            h1firstLine={t('h1firstLine')}
            h1secondLine={t('h1secondLine')}
            firstParagraph={t('firstParagraph')}
            secondParagraph={t('secondParagraph')}
            thirdParagraph={t('thirdParagraph')}
            fourthParagraph={t('fourthParagraph')}
          />
          <Tech />
          <ThemeButton />
          <Box />
        </Container>
      </Scroller>
    </>
  )
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'navbar', 'tech']))
  }
})

export default HomePage