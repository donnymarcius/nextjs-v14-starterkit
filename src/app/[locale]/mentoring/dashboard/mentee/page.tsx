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
          <h1 className='p-0 text-white'>Welcome, Full Name!</h1>
          {/* <p className='italic p-0 text-white'>xxx</p> */}
        </div>
      </div>

      <div className='flex items-start gap-20 p-10'>
        <div className='flex-row w-1/4'>
          <div className='flex items-center my-2'>
            <img src='/images/icon/profile.png' className='w-8' alt='profile' />
            <p className='text-base text-shadow font-medium text-green ml-2'>Profile</p>
          </div>

          <hr className='w-full border-green'></hr>

          <div className='flex items-center my-2'>
            <img src='/images/icon/calendar.png' className='w-8' alt='calendar' />
            <p className='text-base text-shadow font-medium text-green ml-2'>Mentoring Schedule</p>
          </div>

          <hr className='w-full border-green'></hr>

          <div className='flex items-center my-2'>
            <img src='/images/icon/settings.png' className='w-8' alt='settings' />
            <p className='text-base text-shadow font-medium text-green ml-2'>Settings</p>
          </div>
        </div>
        
        <div className='flex-row items-center w-full'>
          <h2 className='font-bold p-0 text-left'>Profile</h2>

          <div className='flex items-center w-full gap-4 px-6 py-2'>
            <p className='flex-none w-1/5 font-bold text-green'>Profile Picture</p>
            <img src='/images/icon/person_white.png' className='w-16 bg-green p-4 rounded-full text-left' alt='person' />
            <img src='/images/icon/edit.png' className='w-6 h-auto bg-green p-1 rounded-md cursor-pointer' alt='edit' />
          </div>

          <div className='flex items-center w-full gap-4 h-16 px-6'>
            <p className='flex-none w-1/5 font-bold text-green'>Full Name</p>
            <p className='flex-none w-1/2 border-2 border-green px-2 rounded-lg'>Lorem ipsum</p>
            <img src='/images/icon/edit.png' className='w-6 h-auto bg-green p-1 rounded-md cursor-pointer' alt='edit' />
          </div>

          <div className='flex items-center w-full gap-4 h-16 px-6'>
            <p className='flex-none w-1/5 font-bold text-green'>Major</p>
            <p className='flex-none w-1/2 border-2 border-green px-2 rounded-lg'>Biology</p>
            <img src='/images/icon/edit.png' className='w-6 h-auto bg-green p-1 rounded-md cursor-pointer' alt='edit' />
          </div>

          <div className='flex items-center w-full gap-4 h-16 px-6'>
            <p className='flex-none w-1/5 font-bold text-green'>Institution</p>
            <p className='flex-none w-1/2 border-2 border-green px-2 rounded-lg'>School</p>
            <img src='/images/icon/edit.png' className='w-6 h-auto bg-green p-1 rounded-md cursor-pointer' alt='edit' />
          </div>

          <div className='flex items-center w-full gap-4 h-16 px-6'>
            <p className='flex-none w-1/5 font-bold text-green'>CV</p>
            <label className='flex items-center px-4 py-2 bg-green text-white rounded cursor-pointer hover:bg-emerald-950'>
              <input type='file' className='hidden' />
              <span>Upload PDF File</span>
            </label>
          </div>

          <div className='flex items-center w-full gap-4 h-16 px-6'>
            <p className='flex-none w-1/5 font-bold text-green'>Email</p>
            <p className='flex-none w-1/2 border-2 border-green px-2 rounded-lg'>test@gmail.com</p>
            <img src='/images/icon/edit.png' className='w-6 h-auto bg-green p-1 rounded-md cursor-pointer' alt='edit' />
          </div>

          <div className='flex items-center w-full gap-4 h-16 px-6'>
            <p className='flex-none w-1/5 font-bold text-green'>WhatsApp Number</p>
            <p className='flex-none w-1/2 border-2 border-green px-2 rounded-lg'>+62</p>
            <img src='/images/icon/edit.png' className='w-6 h-auto bg-green p-1 rounded-md cursor-pointer' alt='edit' />
          </div>

          <div className='flex items-center w-full gap-4 h-16 px-6'>
            <p className='flex-none w-1/5 font-bold text-green'>LinkedIn URL</p>
            <p className='flex-none w-1/2 border-2 border-green px-2 rounded-lg'>https:/</p>
            <img src='/images/icon/edit.png' className='w-6 h-auto bg-green p-1 rounded-md cursor-pointer' alt='edit' />
          </div>
          
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