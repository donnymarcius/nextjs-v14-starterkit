import { useTranslations } from 'next-intl'
import Button from './components/Button'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center font-extrabold leading-tight text-9xl'>
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {t('Synbio ID')}
          </span>
        </h1>
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          A Non-profit Organization that Focus on Enhancing Synthetic Biology and Bioinformatics Enthusiasts in Indonesia.
          We are Ready to Make Any Collaborations with Your Institution.
        </div>
        <div className='mt-4 flex flex-row gap-4'>
          <a
            href=''
            target='_blank'
          >
            <Button rounded size='large'>
              {t('Explore More')}
            </Button>
          </a>
          <a
            href=''
            target='_blank'
          >
            <Button rounded size='large' variant='secondary'>
              {t('About Us')}
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
