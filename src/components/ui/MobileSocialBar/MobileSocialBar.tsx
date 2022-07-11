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
import cn from 'classnames'

const links: Array<Object> = [
  {
    name: 'GitHub',
    url: 'https://github.com/hrqmonteiro',
    color: 'hover:text-blue-500',
    icon: <GithubLogo className='text-xl' />
  },
  {
    name: 'GitLab',
    url: 'https://gitlab.com/hrqmonteiro',
    color: 'hover:text-orange-500',
    icon: <GitlabLogoSimple className='text-xl' />
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/hrqmonteiro',
    color: 'hover:border-pink-500 hover:text-pink-500',
    icon: <InstagramLogo className='text-xl' />
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/hrqmonteiro',
    color: 'hover:border-blue-500 hover:text-blue-500',
    icon: <LinkedinLogo className='text-xl' />
  },
  {
    name: 'Reddit',
    url: 'https://reddit.com/u/hrqmonteirodev',
    color: 'hover:border-orange-500 hover:text-orange-500',
    icon: <RedditLogo className='text-xl' />
  },
  {
    name: 'Twitch',
    url: 'https://twitch.tv/hrqmonteiro',
    color: 'hover:text-purple-500',
    icon: <TwitchLogo className='text-xl' />
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/hrqmonteiro',
    color: 'hover:border-cyan-500 hover:text-cyan-500',
    icon: <TwitterLogo className='text-xl' />
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/user/HenriqueNewsted',
    color: 'hover:border-red-500 hover:text-red-500',
    icon: <YoutubeLogo className='text-xl' />
  }
]

export default function MobileSocialBar(): JSX.Element {
  return (
    <div className='absolute left-0 bottom-6 md:hidden lg:hidden'>
      <div className='w-screen flex justify-center'>
        <ul className='inline-flex'>
          {links.map((link: any, index: number) => (
            <li key={index} className='mx-3'>
              <a
                href={link.url}
                className={cn(link.color)}
                target='_blank'
                rel='noreferrer'
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}