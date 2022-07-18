import { ReactNode } from 'react'
import cn from 'classnames'
import Link from 'next/link'

interface Props {
  classes?: any
  icon?: ReactNode
  onClick?: any
  target?: string
  text?: string
  url: string
}

export default function Button({
  classes,
  icon,
  onClick,
  target,
  text,
  url
}: Props) {
  return (
    <a target={target} href={url}>
      <button
        onClick={onClick}
        className={cn(
          classes,
          'py-4 px-6 bg-green-500 hover:bg-background border-green-500 border rounded-lg text-white hover:text-green-500 font-medium uppercase text-sm transition-all duration-200'
        )}
      >
        <div className='flex justify-around items-center'>
          <div>{icon}</div>
          <div>{text}</div>
        </div>
      </button>
    </a>
  )
}