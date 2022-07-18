import { useTranslation } from 'next-i18next'
import {
  SiAmazonaws,
  SiGraphql,
  SiNextdotjs,
  SiNodedotjs,
  SiServerless,
  SiTypescript,
  SiVercel
} from 'react-icons/si'
import s from './Tech.module.css'
import cn from 'classnames'
import { Container } from 'components/ui'

interface Props {
  icon: any
}

export default function Tech(): JSX.Element {
  const { t } = useTranslation('tech')

  const Card = ({ icon }: Props) => {
    return (
      <div
        className={cn(
          s.card,
          'bg-background w-24 h-24 m-2 flex justify-center items-center rounded-lg transition-all duration-200 transform hover:-translate-y-sq'
        )}
      >
        {icon}
      </div>
    )
  }

  return (
    <section
      id='tech'
      className='bg-base min-h-screen-sm flex flex-wrap justify-center items-center'
    >
      <Container>
        <div className='w-full flex flex-wrap justify-center'>
          <div className='w-full flex justify-center text-center mb-6'>
            <h2 className='hsix md:hfour lg:hfour'>{t('heading')}</h2>
          </div>
          <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6'>
            <Card icon={<SiTypescript className='text-3xl' />} />
            <Card icon={<SiNodedotjs className='text-3xl' />} />
            <Card icon={<SiNextdotjs className='text-3xl' />} />
            <Card icon={<SiServerless className='text-3xl' />} />
            <Card icon={<SiAmazonaws className='text-3xl' />} />
            <Card icon={<SiGraphql className='text-3xl' />} />
          </div>
        </div>
      </Container>
    </section>
  )
}