'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Lottie from 'react-lottie-player'
import Hero  from '../../public/assets/hero.json'
import Hero2  from '../../public/assets/hero2.json'

export default function Home() {
  return (
    <>
      <section className="bg-primary-50  bg-contain py-5 md:py-10 ">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 ">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Create, Connect, Explore: Your Projects, Our Platform! </h1>
            <p className="p-regular-20 ">Discover and showcase projects with our app! Share your work with the public, explore creative ideas, and connect with a community of passionate innovators.</p>
            <Button className="button w-full sm:w-fit" size='lg' asChild >
              <Link href='#projects'>
                Explore Now
              </Link>
            </Button> 
          </div>

          {/* to add hero image */}
          {/* <h1 className="max-h-[70h] object-contain object-center 2xl:max-h-[50h] ">IMAGE</h1> */}
          {/* <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
          /> */}
          <div className="max-sm:flex max-sm:justify-center max-sm:items-center max-sm:py-10">
            <Lottie
              loop
              animationData={Hero2}
              play
              // style={}
              className="sm:max-w-[70vh] max-w-[40vh] object-contain object-center overflow-hidden"
              />
            </div>
        </div>
      </section>

      <section id="projects" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">
          Trust by <br /> Thousands of Projects
        </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search
          CategoryFilter
        </div>
      </section>
    </>
  );
}
