import { useTheme } from 'next-themes'

interface Props {
  width: number
}

export default function Logo({ width }: Props): JSX.Element {
  const { theme } = useTheme()

  return (
    <img
      width={width}
      src={theme === 'dark' ? '/images/logo-white.png' : '/images/logo.png'}
      alt='hrq'
    />
  )
}
