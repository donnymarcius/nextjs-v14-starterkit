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
      <div className='header-wrapper'>
        <div className='header-content'>
          <h1 className='p-0 text-white'>Mentor Selection</h1>
          <p className='italic p-0 text-white'>Read the guidebook <b><u>here</u></b>.</p>
        </div>
      </div>

      <div className='p-10'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 mb-8'>
            <Link lang={locale} href="/mentoring">
              <p className='text-base text-green'>
                Home
              </p>
            </Link>
            <p className='text-base text-green'>{`>`}</p>
            <p className='text-base text-green'>Search Mentor</p>
          </div>

          <div className='flex justify-end items-center'>
            <div className='flex gap-4 align-center mb-8 justify-center'>
              <Link lang={locale} href={'/mentoring/mentor-register'}>
                <div className='filter-button font-medium text-sm text-green'>
                  Register
                </div>
              </Link>

              <Link lang={locale} href="/mentoring/dashboard/mentee">
                <p className='filter-button font-medium text-sm text-green'>Login as Mentee</p>
              </Link>
              
              <Link lang={locale} href="/mentoring/dashboard/mentor">
                <p className='filter-button font-medium text-sm text-green'>Login as Mentor</p>
              </Link>
            </div>
          </div>
        </div>

        <input type='text' placeholder='Find mentors...' className='search-bar' />

        <div className='flex gap-2 my-4 items-center'>
          <p className='font-bold text-green mr-5'>Mentor Category</p>
          <div className='filter-button bg-green text-white'>All</div>
          <p className='text-3xl text-green mx-3'>|</p>

          <div className='filter-button'>Academia</div>
          <div className='filter-button'>Company</div>
          <div className='filter-button'>Start-Up</div>
          <div className='filter-button'>Indonesian Student Abroad</div>
          <div className='filter-button'>Government</div>
        </div>

        <div className='flex gap-2 my-4 mb-8 items-center'>
          <p className='font-bold text-green mr-5'>Mentor Field</p>
          <div className='filter-button bg-green text-white'>All</div>
          <p className='text-3xl text-green mx-3'>|</p>

          <div className='filter-button'>Molecular Biology</div>
          <div className='filter-button'>Stem Cell</div>
          <div className='filter-button'>Ecology</div>
          <div className='filter-button'>Agriculture</div>
          <div className='filter-button'>Medicine</div>
        </div>

        <div className='flex gap-5'>
          <Link lang={locale} href={'/mentoring/mentor/mentor_A'}>
            <fieldset className='card'>
              <div className='each-group'>
                <img src='/images/mentors/I_Dewa_Agung_Panji_Dwipayana.png' alt='I_Dewa_Agung_Panji_Dwipayana' className='fig' />
                <p className='name border-none'>I Dewa Agung<br />Panji Dwipayana</p>
                <p className='role'>QC RnD Manager</p>
                <p className='aflt'>Mahorahora Bumi Nusantara</p>

                <div className='flex gap-4 align-center my-2'>
                  <p className='font-medium text-sm text-white px-3 py-1 bg-green border-2 border-green rounded-2xl'>Academia</p>
                  <p className='font-medium text-sm text-white px-3 py-1 bg-green border-2 border-green rounded-2xl'>Stem Cell</p>
                </div>
              </div>
            </fieldset>
          </Link>

          <fieldset className='card'>
            <div className='each-group'>
              <img src='/images/mentors/I_Dewa_Agung_Panji_Dwipayana.png' alt='I_Dewa_Agung_Panji_Dwipayana' className='fig' />
              <p className='name border-none'>I Dewa Agung<br />Panji Dwipayana</p>
              <p className='role'>QC RnD Manager</p>
              <p className='aflt'>Mahorahora Bumi Nusantara</p>

              <div className='flex gap-4 align-center my-2'>
                <p className='font-medium text-sm text-white px-3 py-1 bg-green border-2 border-green rounded-2xl'>Academia</p>
                <p className='font-medium text-sm text-white px-3 py-1 bg-green border-2 border-green rounded-2xl'>Stem Cell</p>
              </div>
            </div>
          </fieldset>

          <fieldset className='card'>
            <div className='each-group'>
              <img src='/images/mentors/I_Dewa_Agung_Panji_Dwipayana.png' alt='I_Dewa_Agung_Panji_Dwipayana' className='fig' />
              <p className='name border-none'>I Dewa Agung<br />Panji Dwipayana</p>
              <p className='role'>QC RnD Manager</p>
              <p className='aflt'>Mahorahora Bumi Nusantara</p>

              <div className='flex gap-4 align-center my-2'>
                <p className='font-medium text-sm text-white px-3 py-1 bg-green border-2 border-green rounded-2xl'>Academia</p>
                <p className='font-medium text-sm text-white px-3 py-1 bg-green border-2 border-green rounded-2xl'>Stem Cell</p>
              </div>
            </div>
          </fieldset>
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