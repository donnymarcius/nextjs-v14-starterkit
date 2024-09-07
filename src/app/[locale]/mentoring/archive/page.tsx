'use client'
import { useTranslations } from 'next-intl';
import { Link } from '@/src/navigation'
import { FC } from 'react'
interface Props {
  locale: string
}
const archive: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div>
      <div className='header-wrapper'>
        <div className='header-content'>
          <h1 className='p-0 text-white'>Mentors Profile from Previous Batch</h1>
          <p className='italic p-0 text-white'>xxx</p>
        </div>
      </div>

      <div className='flex gap-2 mt-8 px-10'>
        <p className='text-base text-green'>
          <Link lang={locale} href="/mentoring">
            Home
          </Link>
        </p>
        <p className='text-base text-green'>{`>`}</p>
        <p className='text-base text-green'>Archive</p>
      </div>

      <fieldset>
        <legend>Start-Up</legend>

        <div className='mentor-group'>
            <div className='each-group'>
                {/* <a href="mentors_Ihsan_Fauzan.html"> */}
                    <img src='/images/mentors/Ihsan_Fauzan.png' alt='Ihsan_Fauzan' className='fig' />
                    <p className='name'>Ihsan Fauzan</p>
                    <p className='role'>Scientific and Operational Lead</p>
                    <p className='aflt'>PT. Enzim Kreasi Bangsa</p>
                {/* </a> */}

                <a href='https://www.linkedin.com/in/ihsan-fauzan/' target='_blank' rel='noopener noreferrer'><img src='/images/logo/linkedin.png' alt='LinkedIn' className='w-4 m-auto' /></a>
            </div>

            <div className='each-group'>
                {/* <a href="mentors_Alim_El_Hakim.html"> */}
                    <img src='/images/mentors/Alim_El_Hakim.png' alt='Alim_El_Hakim' className='fig' />
                    <p className='name'>Alim El Hakim</p>
                    <p className='role'>Bioinformatician</p>
                    <p className='aflt'>PT. PathGen Diagnostik Teknologi</p>
                {/* </a> */}

                <a href='https://www.linkedin.com/in/alimelhakim/' target='_blank' rel='noopener noreferrer'><img src='/images/logo/linkedin.png' alt='LinkedIn' className='w-4 m-auto' /></a>
            </div>

            <div className='each-group'>
                {/* <a href="mentors_I_Dewa_Agung_Panji_Dwipayana.html"> */}
                    <img src='/images/mentors/I_Dewa_Agung_Panji_Dwipayana.png' alt='I_Dewa_Agung_Panji_Dwipayana' className='fig' />
                    <p className='name'>I Dewa Agung<br />Panji Dwipayana</p>
                    <p className='role'>QC RnD Manager</p>
                    <p className='aflt'>Mahorahora Bumi Nusantara</p>
                {/* </a> */}

                <a href='https://www.linkedin.com/in/dewaagungpanji/' target='_blank' rel='noopener noreferrer'><img src='/images/logo/linkedin.png' alt='LinkedIn' className='w-4 m-auto' /></a>
            </div>
        </div>
      </fieldset>

      <div className='my-20'></div>

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

export default archive