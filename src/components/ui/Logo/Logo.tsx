import { useTheme } from 'next-themes'

interface Props {
  width: number
}

export default function Logo({ width }: Props): JSX.Element {
  const { theme } = useTheme()

  return (
    <div>
      <img
        width={width}
        src={theme === 'dark' ? '/images/logo-white.png' : theme === 'light' ? '/images/logo.png' : '/images/logo.png'}
        alt='hrq'
      />
    </div>
  )
}
