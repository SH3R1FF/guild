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
import logo from '@/public/assets/logo.png'
import Link from "next/link"

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
      <SheetContent className="flex flex-col gap-6 bg-white md:hidden ">
          <Link href="/" className="w-36">
            <Image 
              src={logo} 
              width={128} 
              height={38}
              alt="Guild"
              />
          </Link>
        <Separator className="border border-gray-50 "/>
        <NavItems/>
      </SheetContent>
    </Sheet>
  </nav>
  )
}

export default MobileNav