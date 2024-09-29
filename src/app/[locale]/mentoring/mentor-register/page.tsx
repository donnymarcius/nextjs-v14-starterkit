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

      <div className='p-10'>
        <div className='flex justify-end items-center'>
          <div className='flex gap-4 align-center mb-8 justify-center'>
            <Link lang={locale} href="/mentoring/dashboard/mentee">
              <p className='filter-button font-medium text-sm text-green'>Login as Mentee</p>
            </Link>
            
            <Link lang={locale} href="/mentoring/dashboard/mentor">
              <p className='filter-button font-medium text-sm text-green'>Login as Mentor</p>
            </Link>
          </div>
        </div>

        <p className='font-bold text-center text-green py-20 text-6xl'>Click <u className='hover:cursor-pointer hover:text-secondary'>here</u> to register as mentor.</p>

        <h2 className='text-center mt-12 mb-4'>Testimony from Other Mentors</h2>

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