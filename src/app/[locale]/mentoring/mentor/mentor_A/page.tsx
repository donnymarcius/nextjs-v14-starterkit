'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
interface Props {
  locale: string
}
const mentoring: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div>
      <div className='relative'>
        <img src='/images/mentors/I_Dewa_Agung_Panji_Dwipayana.png' alt='I_Dewa_Agung_Panji_Dwipayana' className='w-48 m-10 rounded-full absolute z-20' />

        <div className='absolute inset-30 flex items-center justify-center z-10 w-full'>
          <div className='header-wrapper'>
            <div className='text-left ml-64 py-6'>
              <h1 className='p-0 text-white'>Mentor Name</h1>
              <p className='italic p-0 text-white text-xl'>Lecturer, Institute of ...</p>
            </div>
          </div>
        </div>
      </div>
      

      <div className='absolute pl-64 pr-10 mt-48'>
        <h2>Education</h2>
        <div>
          
        </div>
      </div>

      <div className="relative h-screen">
        <div className="fixed bottom-4 -left-8">
          <div className="relative group">
            <a href='https://drive.google.com/file/d/1vKOkSozpEHpIT0mkQjJCN7asX6ywaQwS/view?usp=drive_link' target='_blank'>
            <img src='/images/icon/mascot.png' className='w-20 transition-transform duration-300 transform group-hover:translate-x-10' alt='mascot' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default mentoring