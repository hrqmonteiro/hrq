import { useState } from 'react'
import cn from 'classnames'
import {
  GithubLogo,
  GitlabLogoSimple,
  InstagramLogo,
  LinkedinLogo,
  RedditLogo,
  TwitchLogo,
  TwitterLogo,
  YoutubeLogo
} from 'phosphor-react'

const links: Array<Object> = [
  {
    name: 'GitHub',
    url: 'https://github.com/hrqmonteiro',
    color: 'hover:text-blue-500',
    icon: <GithubLogo />
  },
  {
    name: 'GitLab',
    url: 'https://gitlab.com/hrqmonteiro',
    color: 'hover:text-orange-500',
    icon: <GitlabLogoSimple />
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/hrqmonteiro',
    color: 'hover:border-pink-500 hover:text-pink-500',
    icon: <InstagramLogo />
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/hrqmonteiro',
    color: 'hover:border-blue-500 hover:text-blue-500',
    icon: <LinkedinLogo />
  },
  {
    name: 'Reddit',
    url: 'https://reddit.com/u/hrqmonteirodev',
    color: 'hover:border-orange-500 hover:text-orange-500',
    icon: <RedditLogo />
  },
  {
    name: 'Twitch',
    url: 'https://twitch.tv/hrqmonteiro',
    color: 'hover:text-purple-500',
    icon: <TwitchLogo />
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/hrqmonteiro',
    color: 'hover:border-cyan-500 hover:text-cyan-500',
    icon: <TwitterLogo />
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/user/HenriqueNewsted',
    color: 'hover:border-red-500 hover:text-red-500',
    icon: <YoutubeLogo />
  }
]

export default function SocialBar(): JSX.Element {
  const [defaultClasses, setDefaultClasses] = useState<string>('invisible')
  return (
    <div className='hidden md:block lg:block relative bottom-0 -mt-12 lowercase'>
      <div className='flex justify-center'>
        <ul className='inline-flex'>
          {links.map((link: any, index: number) => (
            <div key={index} className='mx-3'>
              <a
                className={cn(
                  'flex text-transparent transition-all duration-200',
                  link.color
                )}
                href={link.url}
                target='_blank'
                rel='noreferrer'
              >
                <span
                  onMouseOver={() => setDefaultClasses(link.color)}
                  onMouseOut={() => setDefaultClasses('invisible')}
                  className={cn(
                    'text-foreground transition-all duration-200',
                    link.color
                  )}
                >
                  {link.name}
                </span>
                <div
                  className={cn(
                    defaultClasses,
                    'flex items-center ml-1 text-md'
                  )}
                >
                  {link.icon}
                </div>
              </a>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}