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

        <div className='absolute inset-30 flex items-center justify-center z-10'>
          <div className='header-wrapper'>
            <div className='header-content'>
              <h1 className='p-0 text-white'>Mentoring Program</h1>
              <p className='italic p-0 text-white'>Gathering mentors and mentees across Indonesia to explore life science</p>
            </div>
          </div>
        </div>
      </div>
      

      <div className='px-10'>
        <div className='flex items-start gap-10 justify-center mb-4'>
            <div className='flex-none pt-20'>
              <img src='/images/icon/mascot.png' className='h-56 my-8' alt='mascot' />
            </div>

          <div className='flex-none w-1/2'>
            <h2 className='speech-bubble -ml-24 mt-8'><span>What is 1-on-1 Mentoring?</span></h2>
            <p className='text-left mt-8'>
              <b>Synbio.ID's Mentoring Program </b>seeks and matches experts from various
              life science backgrounds to share their<b> knowledge and insights </b>with 
              <b> 1-3 mentees </b> to help them pursue their careers and passions.

              <br />
              Click<Link lang={locale} href={'/mentoring/archive'}><b> <u>here</u> </b></Link>
              to see our past mentors(?).
            </p>
          </div>
        </div>
        

        <div className='flex justify-center gap-4'>
          <div className='flex-none bg-gray-200 rounded-lg p-2 w-1/12'>
            <img src='/images/icon/person_white.png' className='w-10 bg-green p-2 rounded-full m-auto' alt='person' />
            <p className='italic text-green text-xs p-0 mt-2 text-center'>Mentor A</p>
          </div>

          <div className='flex-none bg-gray-200 rounded-lg p-2 w-1/12'>
            <img src='/images/icon/person_white.png' className='w-10 bg-green p-2 rounded-full m-auto' alt='person' />
            <p className='italic text-green text-xs p-0 mt-2 text-center'>Mentor B</p>
          </div>

          <div className='flex-none bg-gray-200 rounded-lg p-2 w-1/12'>
            <img src='/images/icon/person_white.png' className='w-10 bg-green p-2 rounded-full m-auto' alt='person' />
            <p className='italic text-green text-xs p-0 mt-2 text-center'>Mentor C</p>
          </div>

          <div className='flex-none bg-gray-200 rounded-lg p-2 w-1/12'>
            <img src='/images/icon/person_white.png' className='w-10 bg-green p-2 rounded-full m-auto' alt='person' />
            <p className='italic text-green text-xs p-0 mt-2 text-center'>Mentor D</p>
          </div>

          <div className='flex-none bg-gray-200 rounded-lg p-2 w-1/12'>
            <img src='/images/icon/person_white.png' className='w-10 bg-green p-2 rounded-full m-auto' alt='person' />
            <p className='italic text-green text-xs p-0 mt-2 text-center'>Mentor E</p>
          </div>
        </div>

        <div className='flex justify-center mt-6 items-center'>
          <p className='font-black text-green text-2xl mr-2'>{`>>>`}</p>
          <Link lang={locale} href="/mentoring/search">
            <div className='button'>
              <span>Search Mentor Here</span>
              {/* <img src='/images/icon/search.png' className='icon ml-2' alt='search' /> */}
            </div>
          </Link>
          <p className='font-black text-green text-2xl ml-2'>{`<<<`}</p>
        </div>

        <h2 className='text-left mt-12 mb-4 pl-8'>Testimony from Mentees</h2>
        <div className='flex gap-4'>
          <div className='testi-card'>
            <p className='text-sm text-justify p-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className='flex justify-end items-center mt-4'>
              <p className='font-medium text-green'>Mentee's Name</p>
              <img src='/images/icon/person_white.png' className='w-8 bg-green p-2 rounded-full ml-2' alt='person' />
            </div>
          </div>

          <div className='testi-card'>
            <p className='text-sm text-justify p-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className='flex justify-end items-center mt-4'>
              <p className='font-medium text-green'>Mentee's Name</p>
              <img src='/images/icon/person_white.png' className='w-8 bg-green p-2 rounded-full ml-2' alt='person' />
            </div>
          </div>

          <div className='testi-card'>
            <p className='text-sm text-justify p-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className='flex justify-end items-center mt-4'>
              <p className='font-medium text-green'>Mentee's Name</p>
              <img src='/images/icon/person_white.png' className='w-8 bg-green p-2 rounded-full ml-2' alt='person' />
            </div>
          </div>

          <div className='testi-card'>
            <p className='text-sm text-justify p-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className='flex justify-end items-center mt-4'>
              <p className='font-medium text-green'>Mentee's Name</p>
              <img src='/images/icon/person_white.png' className='w-8 bg-green p-2 rounded-full ml-2' alt='person' />
            </div>
          </div>
        </div>

        <div className='my-8'></div>
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