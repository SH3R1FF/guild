"use client"

import { useTheme } from 'next-themes'
import { useState, useEffect } from "react";



import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import {  Dela_Gothic_One } from "next/font/google"
import { MoonIcon, SunIcon } from 'lucide-react';

const gothic = Dela_Gothic_One({ subsets: ['latin'], weight: ['400']  })
const Header = () => {

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme()
  
       
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;

  const systemTheme = 'dark'; // or 'dark'

  const currentTheme = theme === 'system ' ? systemTheme : theme;

  return (
    <header className='w-full border-b dark:bg-neutral-900 dark:border-neutral-800'>
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-fit">
      {/* -#ddfc74 yellowish -#00bb81 greenish */}
            <div className="flex items-center justify-center bg-[radial-gradient(100%_100%_at_top_left,#624cf5,#3634c7,#624cf5)] lg:text-3xl text-2xl font-bold text-white rounded-md px-3 py-1"> 
              <p className={` ${gothic.className} ] text-white`}>
                GUILD
              </p>
            </div>    
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs ">
            <NavItems/>
          </nav> 
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
            {currentTheme === 'light' ? (
              <button onClick={() => setTheme('dark')} className='px-2 bg-primary-50 hover:bg-neutral-200 rounded-full border text-neutral-700'>
               <MoonIcon 
               className='h-4 w-4'
               />
              </button>
              ) 

            :(
              <button onClick={() => setTheme('light')} className='px-2 bg-neutral-900 hover:bg-neutral-800/80 hover:bg rounded-full border dark:border-neutral-800'>
                <SunIcon 
                className='h-4 w-4'
                />
              </button>       
            )}
          <SignedIn>
            <UserButton 
              afterSignOutUrl="/"
              // appearance={{
              //   elements: {
              //     // Customizes the button itself
              //     userButtonBox: 'bg-[#141414] border-2 border-[#232323] text-[#c5d0e6] hover:bg-[#232323] hover:text-white transition duration-300',
            
              //     // Avatar inside the button
              //     userButtonAvatarBox: 'border-2 border-[#232323]',
            
              //     // Popover styles
              //     popoverCard: 'bg-[#141414] border-2 border-[#232323] text-[#c5d0e6]',
              //     popoverHeader: 'text-[#c5d0e6]',
              //     popoverCloseButton: 'text-[#c5d0e6] hover:text-white',
              //     popoverCardItem: 'bg-[#141414] text-[#c5d0e6] hover:bg-[#232323] hover:text-white border-none',
              //     popoverFooterActionButton: 'bg-[#141414] text-[#c5d0e6] border-2 border-[#232323] hover:bg-[#232323] hover:text-white',
              //   }
              // }}
              
            />
            <MobileNav/>
          </SignedIn>

          <SignedOut >

            <Button asChild className="rounded-full bg-[radial-gradient(100%_100%_at_top_left,#624cf5,#3634c7,#624cf5)] dark:text-white text-xs md:text-sm px-6">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>  
    
  )
}

export default Header