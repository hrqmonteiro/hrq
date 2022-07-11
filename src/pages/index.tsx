import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { Hero } from 'components/sections'
import { Container, Navbar, ThemeButton } from 'components/ui'
import Flag from 'react-flags'

  const links: Array<Object> = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Work',
      link: '/work'
    },
    {
      name: 'Instagram',
      link: '/instagram'
    },
    {
      name: 'Projects',
      link: '/projects'
    }
  ]

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
            pngSize={16}
            shiny={false}
            alt='USA Flag'
            basePath='/images/flags'
          />
        </div>
        <span className='text-sm'>EN</span>
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
            pngSize={16}
            shiny={false}
            alt='BRA Flag'
            basePath='/images/flags'
          />
        </div>
        <span className='text-sm'>PT</span>
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

      <Container>
        <Hero
          h1firstLine={t('h1firstLine')}
          h1secondLine={t('h1secondLine')}
          firstParagraph={t('firstParagraph')}
          secondParagraph={t('secondParagraph')}
          thirdParagraph={t('thirdParagraph')}
        />
        <ThemeButton />
      </Container>
    </>
  )
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

export default HomePage