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

      <div className='flex justify-between items-center pt-10 px-10'>
        <div className='flex gap-2'>
          <Link lang={locale} href="/mentoring">
            <p className='text-base text-green'>
              Home
            </p>
          </Link>
          <p className='text-base text-green'>{`>`}</p>
          <p className='text-base text-green'>Dashboard</p>
        </div>
      </div>

      <div className='flex items-start gap-20 p-10'>
        <div className='flex-row w-1/4'>
          <Link lang={locale} href="/mentoring/dashboard/mentee">
            <div className='flex items-center my-2'>
              <img src='/images/icon/profile.png' className='w-8' alt='profile' />
              <p className='text-base text-shadow font-medium text-green ml-2'>Profile</p>
            </div>
          </Link>

          <hr className='w-full border-green'></hr>

          {/* <Link lang={locale} href="/mentoring/dashboard/schedule"> */}
            <div className='flex items-center my-2'>
              <img src='/images/icon/calendar.png' className='w-8' alt='calendar' />
              <p className='text-base text-shadow font-medium text-green ml-2'>Scheduled Session</p>
            </div>
          {/* </Link> */}

          <hr className='w-full border-green'></hr>

          <div className='flex items-center my-2'>
            <img src='/images/icon/settings.png' className='w-8' alt='settings' />
            <p className='text-base text-shadow font-medium text-green ml-2'>Settings</p>
          </div>
        </div>
        
        <div className='flex-row items-center w-full'>
          <h2 className='font-bold p-0 text-left'>Scheduled Session</h2>
          
          <div className='bg-background-secondary rounded-xl my-4 p-4'>
            <div className='flex justify-between'>
              <p className='font-bold text-xl mb-2'>Tuesday, September 10th, 2024 &nbsp; 10:00-12:00 (GMT+7)</p>
              <p className='font-black text-xl mb-2 text-green'>Approved</p>
            </div>
            
            <p className='ml-4 text-lg'>Mentoring with: <u className='hover:cursor-pointer'>Lorem Ipsum</u></p>
            <p className='ml-4 text-lg'>Google meeting link: <u className='hover:cursor-pointer'>https:/</u></p>
          </div>

          <div className='bg-yellow-100 rounded-xl my-4 p-4'>
            <div className='flex justify-between'>
              <p className='font-bold text-xl mb-2'>Wednesday, September 11th, 2024 &nbsp; 15:00-17:00 (GMT+7)</p>
              <p className='font-black text-xl mb-2 text-yellow-800'>Pending</p>
            </div>
            <p className='ml-4 text-lg'>Mentoring with: <u className='hover:cursor-pointer'>Lorem Ipsum</u></p>
          </div>

          <div className='bg-red-100 rounded-xl my-4 p-4'>
            <div className='flex justify-between'>
              <p className='font-bold text-xl mb-2'>Thursday, September 12th, 2024 &nbsp; 12:00-14:00 (GMT+7)</p>
              <p className='font-black text-xl mb-2 text-red-800'>Rejected</p>
            </div>
            <p className='ml-4 text-lg'>Mentoring with: <u className='hover:cursor-pointer'>Lorem Ipsum</u></p>
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