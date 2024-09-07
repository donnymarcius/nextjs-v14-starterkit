'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
      <div className='flex flex-row items-center'>
        <nav className='mr-10 inline-flex gap-8'>
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
        </nav>
      </div>

      <div className='flex flex-row items-center gap-3'>
        <ThemeSwitch />
        <LangSwitcher />
      </div>
    </div>
  )
}
