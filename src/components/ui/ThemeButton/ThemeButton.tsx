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
      <button className={cn('fixed btnrounded dark-mode-switch', s.switch)}>
        {currentTheme === 'dark' ? (
          <Sun onClick={() => setTheme('light')} className='text-2xl' />
        ) : currentTheme === 'light' ? (
          <Moon onClick={() => setTheme('dark')} className='text-2xl' />
        ) : null}
      </button>
    )
  }

  return <>{renderThemeButton()}</>
}