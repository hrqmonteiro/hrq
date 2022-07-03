import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Hero({ children }: Props): JSX.Element {
  return (
    <section id='hero' className='center'>
      {children}
    </section>
  )
}
