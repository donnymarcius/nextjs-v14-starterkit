'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
interface Props {
  locale: string
}

import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
interface RowData  {
  name: string;
  testi: string;
}

const mentoring: FC<Props> = ({ locale }) => {
  const t = useTranslations('')

  const [rows, setRows] = useState<RowData[]>([]);

  useEffect(() => {
    const fetchExcelFile = async () => {
      try {
        // Fetch the file from the public folder
        const response = await fetch('/data/testi.xlsx');
        const arrayBuffer = await response.arrayBuffer();
        
        // Parse the Excel file
        const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Convert the sheet data to JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Loop through the rows and extract the data
        const rowsData = jsonData.map((row: any) => ({
          name: row[0],
          testi: row[1],
        }));

        setRows(rowsData);
      } catch (error) {
        console.error('Error fetching or reading the Excel file:', error);
      }
    };

    fetchExcelFile();
  }, []);

  return (
    <div>
      <div className='header-wrapper'>
        <div className='header-content'>
          <h1 className='p-0 text-white'>Mentoring Program</h1>
          <p className='italic p-0 text-white'>Gathering mentors and mentees across Indonesia to explore life science</p>
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

        <div className='flex flex-wrap gap-4'>
          {rows.map((row, index) => (
            <div
              key={index}
              className='flex-1 min-w-[200px] testi-card'
            >
              <p className='text-sm text-justify p-0'>{row.testi}</p>
              <div className='flex justify-end items-center mt-4'>
                <p className='font-medium text-green'>{row.name}</p>
                <img src='/images/icon/person_white.png' className='w-8 bg-green p-2 rounded-full ml-2' alt='person' />
              </div>
            </div>
          ))}
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