import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next']
  },
  theme: {
    fontSize: {
      xxs: '.6rem',
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    extend: {
      lineHeight: {
        extraloose: '3'
      },
      colors: {
        foreground: 'var(--foreground)',
        background: 'var(--background)'
      },
      textColor: {
        foreground: 'var(--foreground)'
      },
      fontFamily: {
        sans: ['Neue Haas Grotesk Display Pro'],
        mono: ['DM Mono']
      }
    }
  },
  shortcuts: {
    center: 'w-full min-h-screen flex flex-wrap justify-center items-center',
    flexAround: 'w-full flex justify-around items-center',
    flexBetween: 'w-full flex justify-between items-center',
    flexCenter: 'w-full flex justify-center items-center',
    flexStart: 'w-full flex justify-around items-center',
    hone: 'text-6xl leading-none font-medium'
  }
})
