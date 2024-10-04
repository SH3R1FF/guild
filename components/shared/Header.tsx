import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import {  Dela_Gothic_One } from "next/font/google"

const gothic = Dela_Gothic_One({ subsets: ['latin'], weight: ['400']  })
const Header = () => {

  const buttonStyles = {
    border: 'none',
    backgroundSize: '300% 100%',
    transition: '0.3s',
    backgroundImage: 'linear-gradient(-60deg, rgb(9, 182, 162), rgb(107, 248, 231), rgb(9, 182, 162))',
    backgroundPosition: '100% 0px',
  };

  return (
    <header className='w-full border-b '>
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-fit">
      {/* -#ddfc74 yellowish -#00bb81 greenish */}
            <div className="flex items-center justify-center bg-[radial-gradient(100%_100%_at_top_left,#624cf5,#3634c7,#624cf5)] lg:text-3xl text-3xl font-bold text-white rounded-md px-3 py-1"> 
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

        <div className="flex w-32 justify-end gap-3 ">
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
            <MobileNav/>
          </SignedIn>

          <SignedOut >
            <Button asChild className="rounded-full bg-[radial-gradient(100%_100%_at_top_left,#624cf5,#3634c7,#624cf5)]" size={"lg"}>
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