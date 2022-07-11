import { useTheme } from 'next-themes'
import { Moon, Sun } from 'phosphor-react'
import cn from 'classnames'
import s from './ThemeButton.module.css'
import { useEffect, useState } from 'react'

interface Props {
  text: string
}

export default function ThemeButton() {
  const [mounted, setMounted] = useState<Boolean>(false)
  const { theme, systemTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeButton = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    return (
      <button
        onClick={() =>
          currentTheme === 'dark' ? setTheme('light') : setTheme('dark')
        }
        className={cn('fixed btnrounded dark-mode-switch', s.switch)}
      >
        {currentTheme === 'dark' ? (
          <Sun className='text-2xl' />
        ) : currentTheme === 'light' ? (
          <Moon className='text-2xl' />
        ) : null}
      </button>
    )
  }

  return <>{renderThemeButton()}</>
}