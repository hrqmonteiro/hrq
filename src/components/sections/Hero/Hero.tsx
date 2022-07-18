import TypeIt from 'typeit-react'
import s from './Hero.module.css'
import cn from 'classnames'
import { Button, Container, MobileSocialBar } from 'components/ui'
import { ChatDots, ChatText } from 'phosphor-react'
import { useTranslation } from 'next-i18next'

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

export default function Hero(): JSX.Element {
  const { t } = useTranslation('hero')

  return (
    <>
      <section
        id='hero'
        className='min-h-screen py-16 w-full flex flex-wrap justify-start items-center'
      >
        <Container>
          <div className='w-full md:w-full lg:w-1/2'>
            <h1
              className={cn(
                s.header,
                'hthree md:htwo lg:htwo font-medium font-mono mb-10'
              )}
            >
              {t('h1firstLine')}
              <br />
              <span className='text-green-500 italic'>
                <TypeWriter />
              </span>
              <br />
              {t('h1secondLine')}
            </h1>
            <p className='hsix md:hfive lg:hfive font-normal mb-6'>
              {t('firstParagraph')}
            </p>
            <p className='hseven md:hsix lg:hsix font-light mb-6'>
              {t('secondParagraph')}
            </p>
            <p className='height md:hseven lg:hseven font-thin mb-14'>
              <span>{t('thirdParagraph')}</span>
              <br />
              <span>{t('fourthParagraph')}</span>
            </p>
            <Button
              icon={<ChatDots className='text-2xl mx-2' />}
              url='/#tech'
              text={t('bookMyTime')}
            />
          </div>
        </Container>
      </section>
      <MobileSocialBar />
    </>
  )
}