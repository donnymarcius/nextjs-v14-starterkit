import { useTranslations } from 'next-intl'

export default function BIOS() {
  const t = useTranslations('')
  return (
    <div>
      <h2>
        BIOS 2024
        <br />
        <span>Bioinformatics & Synthetic Biology Competition</span>
      </h2>

      <h6 className='text-center font-extrabold'>
          Bios &emsp; &emsp;
          <span className='font-light'>
            <a href=''>Competition</a>
          </span>
      </h6>

      <br />
      <img src='/images/banner-gif-indonesia-s4.gif' alt='banner' />
      <br />

      <div className='flex flex-row justify-between p-20'>
        <div className='flex-col pr-20'>
          <h3 className='green'>
            Ideate, Learn, Create & Compete with us
            <img src='/images/idnl-graphic-elements-01.png' className='inline size-2/12 p-2' />
          </h3>
          <p>
            iGEM Indonesian League is a synthetic biology competition for high school and undergraduate students, comlemented by a series of educational workshops to introduce you to global #synbio ecosystem
          </p>
        </div>

        <img src='/images/idnl-graphic-elements-16-scale.png' alt='photo'
         className='size-2/5 rounded-3xl' />
      </div>

      <div className='relative overflow-hidden'>
        <img src='/images/idnl-graphic-elements-11-scale.png' className='w-full'/>
        <div className='absolute text-white text-4xl text-center leading-relaxed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          It is time for Indonesia <br />
          to join the global synbio ecosystem, <br />
          from Sabang to Merauke!
        </div>
      </div>

      <div className='p-20'>
        <h3 className='purple'>
          Why this is the right time?
          <img src='/images/idnl-graphic-elements-01.png' className=' inline size-1/12 p-2' />
        </h3>

        <div className='flex flex-row'>

        </div>
      </div>

    </div>
    // <div className='px-32 py-24 text-center text-2xl'>
    //   {t(
    //     'This_is_a_simple_about_page_just_to_show_how_you_can_use_the_internationalization_in_different_pages'
    //   )}
    // </div>
  )
}
