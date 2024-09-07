'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
interface Props {
  locale: string
}
export const Footer: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div>
      <footer className='bg-background-secondary p-20 max-lg:py-10'>
        <div className='flex gap-4 items-center justify-center'>
          <img src='/images/logo/synbio.png' alt='SynbioID-logo' className='h-16 mr-8' />

          <a href='https://www.instagram.com/synbio.id/' target='_blank'>
            <div className='image-wrapper w-10 h-10 rounded-full overflow-hidden border-green border-2 flex items-center justify-center hover:bg-green'>
              <img src='/images/logo/ig-green.png' alt='Instagram-logo' className='w-5 h-5 object-cover' />
            </div>
          </a>
          
          <a href='https://www.linkedin.com/company/synbio-indonesia/' target='_blank'>
            <div className='image-wrapper w-10 h-10 rounded-full overflow-hidden border-green border-2 flex items-center justify-center hover:bg-green'>
              <img src='/images/logo/linkedin-green.png' alt='Instagram-logo' className='w-5 h-5 object-cover' />
            </div>
          </a>
        </div>

        <div className='flex gap-10 mt-12 items-center justify-center font-medium'>
          <Link lang={locale} href={'/home'}>
            {t('Home')}
          </Link>
          <Link lang={locale} href={'/bios'}>
            {t('Competition')}
          </Link>
          <Link lang={locale} href={'/mentoring'}>
            {t('Mentoring')}
          </Link>
          <Link lang={locale} href={'/journalclub'}>
            {t('Journal Club')}
          </Link>
          <a href='https://medium.com/biologi-sintetis-indonesia' target="_blank" rel="noopener noreferrer">{t('Medium')}</a>
          <Link lang={locale} href={'/about'}>
            {t('About')}
          </Link>
          <Link lang={locale} href={'/contact'}>
            {t('Contact')}
          </Link>
        </div>
      </footer>
    </div>
  )
}