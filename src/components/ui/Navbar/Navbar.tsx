import { useTheme } from 'next-themes'
import { Container, Logo } from 'components/ui'
import { EnvelopeSimple, EnvelopeSimpleOpen, Moon, Sun } from 'phosphor-react'
import Link from 'next/link'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'

export default function Navbar({ flag, locale }: any): JSX.Element {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<Boolean>(false)
  const [mailIcon, setMailIcon] = useState(
    <EnvelopeSimpleOpen className='transform rotate-sq mr-3 text-xl' />
  )

  const { t } = useTranslation('navbar')
  const router = useRouter()

  useEffect(() => {
    console.log(systemTheme)
    setMounted(true)
  }, [systemTheme])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    return (
      <button>
        {currentTheme === 'dark' ? (
          <Sun onClick={() => setTheme('light')} className='text-2xl' />
        ) : (
          <Moon onClick={() => setTheme('dark')} className='text-2xl' />
        )}
      </button>
    )
  }

  const linkClasses =
    'mx-4 my-2 py-1 hover:border-b-2 border-green-300 transition-all duration-100'

  const links: Array<Object> = [
    {
      name: t('navbarHome'),
      link: '/'
    },
    {
      name: t('navbarWork'),
      link: '/work'
    },
    {
      name: t('navbarInstagram'),
      link: '/instagram'
    },
    {
      name: t('navbarProjects'),
      link: '/projects'
    }
  ]

  return (
    <div className='w-full my-5 h-20 fixed top-0'>
      <Container>
        <div className='flexBetween'>
          <Logo width={80} />
          <ul className='hidden md:inline-flex lg:inline-flex'>
            {links.map((link: any, index: number) => (
              <li key={index}>
                <Link href={link.link}>
                  <a
                    onClick={() => console.log(router.pathname)}
                    className={cn(
                      linkClasses,
                      router.pathname === link.link ? 'border-b-2' : ''
                    )}
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex justify-center items-center'>
            <a
              href='mailto:hrqmonteiro@pm.me'
              onMouseOver={() =>
                setMailIcon(<EnvelopeSimple className='mr-3 text-xl' />)
              }
              onMouseOut={() =>
                setMailIcon(
                  <EnvelopeSimpleOpen className='transform rotate-sq mr-3 text-xl' />
                )
              }
              className='flex justify-center items-center transition-all duration-200 lg:mx-8'
            >
              {mailIcon}
              <span className='hidden md:hidden lg:block'>
                {t('navbarHire')}
              </span>
            </a>
            <Link locale={locale} href='/'>
              <a>{flag}</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}