import Link from 'next/link'
import React from 'react'
import {  Dela_Gothic_One } from "next/font/google"

const gothic = Dela_Gothic_One({ subsets: ['latin'], weight: ['400']  })

const Footer = () => {
  return (
    <footer className='border-t dark:bg-neutral-900/90 dark:border-neutral-800'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row '>
        <Link href="/" className="w-fit">
        {/* -#ddfc74 yellowish -#00bb81 greenish */}
              <div className="flex items-center justify-center bg-[radial-gradient(100%_100%_at_top_left,#624cf5,#3634c7,#624cf5)] lg:text-3xl text-3xl font-bold text-white rounded-md px-3 py-1"> 
                <p className={` ${gothic.className} ] text-white`}>
                  GUILD
                </p>
              </div>    
          </Link>

        <p className='dark:text-neutral-400'>2025 Guild. All Rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer