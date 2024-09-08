'use client'
import { useTranslations } from 'next-intl';
import { Link } from '@/src/navigation'
import { FC } from 'react'
interface Props {
  locale: string
}

import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
interface RowData  {
  category: string;
  name: string;
  role: string;
  affiliation: string;
  linkedin: string;
}

const archive: FC<Props> = ({ locale }) => {
  const t = useTranslations('')

  const [rows, setRows] = useState<RowData[]>([]);

  useEffect(() => {
    const fetchExcelFile = async () => {
      try {
        // Fetch the file from the public folder
        const response = await fetch('/data/past-mentors.xlsx');
        const arrayBuffer = await response.arrayBuffer();
        
        // Parse the Excel file
        const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Convert the sheet data to JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Loop through the rows and extract the data
        const rowsData = jsonData.map((row: any) => ({
          category: row[0],
          name: row[1],
          role: row[2],
          affiliation: row[3],
          linkedin: row[4]
        }));

        setRows(rowsData);
      } catch (error) {
        console.error('Error fetching or reading the Excel file:', error);
      }
    };

    fetchExcelFile();
  }, []);
  
  const filteredRowsAcademia = rows.filter(row => row.category === 'Academia');

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
        <legend>Academia</legend>
        {/* <div className='flex flex-wrap gap-4'>
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
        </div> */}
        <div className='mentor-group'>
          {rows.map((row, index) => (
            <div 
              key={index}
              className='each-group'
            >
              <img src='/images/mentors/Ihsan_Fauzan.png' alt='Ihsan_Fauzan' className='fig' />
              <p className='name'>{row.name}</p>
              <p className='role'>{row.role}</p>
              <p className='aflt'>{row.affiliation}</p>
            </div>
          ))}
            <div className='each-group'>
                {/* <a href="mentors_Ihsan_Fauzan.html"> */}
                    <img src='/images/mentors/Ihsan_Fauzan.png' alt='Ihsan_Fauzan' className='fig' />
                    <p className='name'>Ihsan Fauzan</p>
                    <p className='role'>Scientific and Operational Lead</p>
                    <p className='aflt'>PT. Enzim Kreasi Bangsa</p>
                {/* </a> */}

                <a href='https://www.linkedin.com/in/ihsan-fauzan/' target='_blank' rel='noopener noreferrer'><img src='/images/logo/linkedin.png' alt='LinkedIn' className='w-4 m-auto' /></a>
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