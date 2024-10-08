import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import menu from "@/public/assets/icons/menu.svg"
import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems"
import Link from "next/link"
import {  Dela_Gothic_One } from "next/font/google"

const gothic = Dela_Gothic_One({ subsets: ['latin'], weight: ['400']  })

const MobileNav = () => {
  return (
    <nav className="md:hidden">
    <Sheet>
      <SheetTrigger className="align-middle">
        
        <Image
          src={menu}
          alt="menu"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6 bg-white dark:bg-neutral-900 dark:border-neutral-800 md:hidden ">
        <SheetTitle className="hidden" />  
        <Link href="/" className="w-fit">
              <div className="flex items-center justify-center bg-[radial-gradient(100%_100%_at_top_left,#624cf5,#3634c7,#624cf5)] lg:text-3xl text-3xl font-bold text-white rounded-md px-3 py-1"> 
                <p className={` ${gothic.className} ] text-white`}>
                  GUILD
                </p>
              </div>    
        </Link>
        <Separator className="border border-gray-50 dark:border-stone-900"/>
        <SheetDescription className="hidden"/>
        <NavItems/>
      </SheetContent>
    </Sheet>
  </nav>
  )
}

export default MobileNav