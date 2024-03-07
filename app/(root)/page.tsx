import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 ">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 ">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Create, Explore, Connect : Your Projects, Our Platform! </h1>
            <p className="p-regular-20 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nam beatae sapiente id deserunt quo nulla!</p>
            <Button className="button w-full sm:w-fit" size='lg' asChild >
              <Link href='#projects'>
                Explore Now
              </Link>
            </Button> 
          </div>

          {/* to add hero image */}
          <h1 className="max-h-[70h] object-contain object-center 2xl:max-h-[50h] ">IMAGE</h1>
          {/* ...... */}
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
