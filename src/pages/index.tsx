import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { Hero, Tech } from 'components/sections'
import { Navbar, SocialBar, ThemeButton } from 'components/ui'
import Flag from 'react-flags'

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

      <Hero />
      <SocialBar />
      <img src='/images/wave.svg' alt='wave' />
      <Tech />
      <ThemeButton />
    </>
  )
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'hero',
      'navbar',
      'tech'
    ]))
  }
})

export default HomePage