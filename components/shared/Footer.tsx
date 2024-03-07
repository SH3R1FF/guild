import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '@/public/assets/logo.png'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row '>
        <Link href='/'>  
          <Image 
              src={logo} 
              width={128} 
              height={38}
              alt="Guild"
              />
        </Link>

        <p>2024 Guild. All Rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer