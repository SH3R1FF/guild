import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Collection from "@/components/shared/Collection";
import { getAllProjects } from "@/lib/actions/project.actions";
import HeroLottie from "@/components/shared/HeroLottie";
import Search from "@/components/shared/Search";
import { SearchParamProps } from "@/types";
import CategoryFilter from "@/components/shared/CategoryFilter";
export default async function Home({ searchParams }: SearchParamProps) {

  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const projects = await getAllProjects({
    query: searchText,
    category,
    page,
    limit: 6
  });


  return (
    <>
      <section className="bg-primary-50  bg-contain py-5 md:py-10 ">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 ">
          <div className="flex flex-col justify-center gap-8">
            <h1 className={`h1-bold`}>Create, Connect, Explore: Your Projects, Our Platform! </h1>
            <p className="p-regular-20 ">Discover and showcase projects with our app! Share your work with the public, explore creative ideas, and connect with a community of passionate innovators.</p>
            <Button className="button w-full sm:w-fit bg-[radial-gradient(100%_100%_at_top_left,#624cf5,#3634c7,#624cf5)]" size='lg' asChild >
              <Link href='#projects'>
                Explore Now
              </Link>
            </Button> 
          </div>

          <div className="max-sm:flex max-sm:justify-center max-sm:items-center max-sm:py-10">
            <HeroLottie/>
          </div>
        </div>
      </section>

      <section id="projects" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">
          Trust by <br /> Thousands of Projects
        </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search/>
          <CategoryFilter/>
        </div>

        <Collection
          data={projects?.data}
          emptyTitle="No Projects Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Projects"
          limit={6}
          page={page}
          totalPages={projects?.totalPages}
        />
        
      </section>
    </>
  );
}
