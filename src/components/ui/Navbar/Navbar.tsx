import { useTheme } from 'next-themes'
import { Container, Logo } from 'components/ui'
import { Moon, Sun } from 'phosphor-react'
import Link from 'next/link'

export default function Navbar(): JSX.Element {
  const { theme, setTheme } = useTheme()

  function handleChangeTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className='w-full p-5 h-20 fixed top-0'>
      <Container>
        <div className='flexBetween px-2'>
          <Logo width={80} />
          <ul className='inline-flex'>
            <li className='mx-4'>
              <Link href='#'>
                <a>Home</a>
              </Link>
            </li>
            <li className='mx-4'>
              <Link href='#'>
                <a>Work</a>
              </Link>
            </li>
            <li className='mx-4'>
              <Link href='#'>
                <a>Instagram</a>
              </Link>
            </li>
            <li className='mx-4'>
              <Link href='#'>
                <a>Projects</a>
              </Link>
            </li>
          </ul>
          <button onClick={handleChangeTheme} className='text-2xl'>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </div>
      </Container>
    </div>
  )
}
