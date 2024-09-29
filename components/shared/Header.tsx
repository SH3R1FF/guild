import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import Image from "next/image"
import logo from '@/public/assets/logo.png'

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
        <Link href="/" className="w-36">
          <Image 
            src={logo} 
            width={128} 
            height={38}
            alt="Guild"
            />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs ">
            <NavItems/>
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3 ">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav/>
          </SignedIn>

          <SignedOut >
            <Button asChild className="rounded-full" size="lg">
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