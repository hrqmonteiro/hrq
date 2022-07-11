import TypeIt from 'typeit-react'
import { SocialBar } from 'components/ui'
import s from './Hero.module.css'
import cn from 'classnames'

const TypeWriter = () => (
  <TypeIt
    options={{ loop: true }}
    getBeforeInit={(instance) => {
      const options: Array<Object> = [
        {
          name: 'Web Developer'
        },
        {
          name: 'React Specialist'
        },
        {
          name: 'Software Developer'
        },
        {
          name: 'MERN Specialist'
        },
        {
          name: 'Next.js Entusiast'
        }
      ]

      options.forEach((option: any) => {
        instance.type(option.name).pause(1500).delete(option.name.length)
      })

      return instance
    }}
  />
)

export default function Hero({
  h1firstLine,
  h1secondLine,
  firstParagraph,
  secondParagraph,
  thirdParagraph
}: any): JSX.Element {
  return (
    <>
      <section
        id='hero'
        className='min-h-screen w-full flex flex-wrap justify-start items-center'
      >
        <div className='w-full md:w-1/2 lg:w-1/2'>
          <h1
            className={cn(
              s.header,
              'hthree md:htwo lg:htwo font-medium font-mono mb-10'
            )}
          >
            {h1firstLine}
            <br />
            <span className='text-green-500'>
              <TypeWriter />
            </span>
            <br />
            {h1secondLine}
          </h1>
          <p className='hthree font-normal mb-6'>{firstParagraph}</p>
          <p className='hfour font-light mb-6'>{secondParagraph}</p>
          <p className='hfive font-thin mb-6'>{thirdParagraph}</p>
        </div>
      </section>
      <SocialBar />
    </>
  )
}