import { useTranslation } from 'next-i18next'
import { SiAmazonaws, SiGraphql, SiNextdotjs, SiNodedotjs, SiServerless, SiTypescript, SiVercel } from 'react-icons/si'

interface Props {
  icon: any
}

export default function Tech(): JSX.Element {
  const { t } = useTranslation('tech')

  const Card = ({ icon }: Props) => {
    return (
      <div className='bg-gray-100 w-24 h-24 m-2 lg:m-8 flex justify-center items-center rounded-lg'>
        {icon}
      </div>
    )
  }

  return (
    <section
      id='tech'
      className='min-h-screen py-20 w-full flex flex-wrap justify-center items-center'
    >
      <div className='w-full flex flex-wrap justify-center'>
        <div className='w-full flex justify-center text-center mb-6'>
          <h2 className='hsix md:hfour lg:hfour'>{t('heading')}</h2>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
          <Card icon={<SiTypescript className='text-3xl' />} />
          <Card icon={<SiNodedotjs className='text-3xl' />} />
          <Card icon={<SiNextdotjs className='text-3xl' />} />
          <Card icon={<SiServerless className='text-3xl' />} />
          <Card icon={<SiAmazonaws className='text-3xl' />} />
          <Card icon={<SiGraphql className='text-3xl' />} />
        </div>
      </div>
    </section>
  )
}