import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  width: number
}

export default function Logo({ width }: Props): JSX.Element {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState<Boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const resolveLogo = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return <img src='/images/logo-white.png' alt='hrq()' width={80} />
    } else if (systemTheme === 'light') {
      return <img src='/images/logo.png' alt='hrq()' width={80} />
    }

    if (currentTheme === 'dark') {
      return <img src='/images/logo.png' alt='hrq()' width={80} />
    } else if (theme === 'light') {
      return <img src='/images/logo.png' alt='hrq()' width={80} />
    }
  }

  return <>{resolveLogo()}</>
}