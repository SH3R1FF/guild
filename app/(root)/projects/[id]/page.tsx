import { getProjectById, getRelatedProjectsByCategory } from '@/lib/actions/project.actions'
import { SearchParamProps } from '@/types'
import React from 'react'
import Image from 'next/image'
import { Clock, Github, Link2, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Collection from '@/components/shared/Collection'

const ProjectDetails = async ({ params: { id }, searchParams}: SearchParamProps) => {

  const project = await getProjectById(id)
  
  const dateString = project.createdAt
  const date = new Date(dateString)

  const formattedDate = date.toLocaleDateString('en-GB', {
    weekday: 'long',   // Full weekday name
    day: 'numeric',    // Numeric day (no leading zero)
    month: 'long',     // Full month name
    year: 'numeric',   // Full year
  });

  const pageParam = Array.isArray(searchParams.page) ? searchParams.page[0] : searchParams.page;

  const currentPage = pageParam && !isNaN(Number(pageParam))
    ? parseInt(pageParam, 10)
    : 1;

  const relatedProjects = await getRelatedProjectsByCategory({
    categoryId: project.category._id,
    projectId: project._id,
    page: currentPage,
    limit: 3,
  });

  // console.log(searchParams)
  // console.log(currentPage)
  // console.log("Current Page:", searchParams.page);


  return (
    <>
    <section className='flex justify-center bg-primary-50 dark:bg-neutral-900 bg-contain border-b dark:border-neutral-800'>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">

          <div className="flex justify-center items-center flex-col lg:my-6 md:my-2 my-0 md:ml-8">     
          {/* <div className="flex justify-center items-center flex-col ">      */}
            <Image 
              src={project.imageUrl}
              alt="hero image"
              width={1000}
              height={500}
              // className="h-full min-h-[300px] object-cover object-center rounded-lg"
              className="lg:h-[500px] hover:lg:h-[400px] md:h-[525px] md:hover:h-[250px] h-[250px] duration-700 object-cover object-center md:rounded-2xl lg:rounded-3xl cursor-pointer"
              // className="lg:h-[500px] h-[250px] hover:lg:h-[400px] duration-1000 object-cover object-center rounded-xl cursor-pointer" 
            />
          </div>

          <div className='flex w-full flex-col gap-8 p-5 md:p-10'>
            <div className='flex flex-col gap-6'>
              <h2 className='h2-bold uppercase'>{project.title}</h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                
                    <p className="p-medium-16 rounded-full bg-[radial-gradient(100%_100%_at_top_left,#624cf5,#3634c7,#624cf5)] text-primary-50 px-4 py-2.5">
                      {project.category.name}
                    </p>
                </div>

                <p className="p-medium-18 ml-2 mt-2 sm:mt-0 dark:text-neutral-400">
                  by{' '}
                  <span className="text-primary-500 ml-1">{project.creator.firstName}</span>
                </p>

              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className='flex gap-2 md:gap-3 items-center'>
          
                {/* <Clock color="#4252cd" width={22} height={22} className='h-[20px] w-[20px] dark:h-[32px] dark:w-[32px] dark:p-2 dark:bg-neutral-800 dark:rounded-lg'/> */}
                <Clock color="#4252cd" width={22} height={22} className='h-[32px] w-[32px] p-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg'/>
                <div className="p-medium-14  lg:p-regular-18 text-neutral-500">
                  <p>Created at {formattedDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                {/* <Mail color="#4252cd" width={22} height={22} className='h-[20px] w-[20px] dark:h-[32px] dark:w-[32px] dark:p-2 dark:bg-neutral-800 dark:rounded-lg'/> */}
                <Mail color="#4252cd" width={22} height={22} className='h-[32px] w-[32px] p-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg'/>
                <div className="p-medium-14 lg:p-regular-18 dark:text-neutral-300">
                  <p>{project.email}</p>
                </div>
              </div>
            </div>


            <div className="flex flex-col gap-2">
              <p className="p-bold-20 dark:text-neutral-500">What You'll Discover:</p>
              <p className="p-medium-16 lg:p-regular-18 dark:text-neutral-200 ">{project.description}</p>
            </div>

            <div className="flex items-center gap-2 md:gap-3 mt-4">

              <Button asChild className='bg-[radial-gradient(100%_100%_at_top_left,#624cf5,#3634c7,#624cf5)] text-white'>
                <Link href={project.url} target='_blank'> 
                  <Link2 className="mr-2 h-5 w-5" /> Visit
                </Link>
              </Button>


              <Button asChild className='bg-neutral-800 hover:bg-neutral-800/90  dark:hover:bg-neutral-800/70 text-white'>
                <Link href={project.codeUrl} target='_blank'>
                  <Github className="mr-2 h-5 w-5" /> Code
                </Link>
              </Button>

            </div>
              
          </div>

      </div> 
    </section>


    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">Related Projects</h2>

      <Collection 
          data={relatedProjects?.data}
          emptyTitle="No Related Projects Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Projects"
          limit={3}
          page={currentPage}
          totalPages={relatedProjects?.totalPages}
        />
    </section>
    
    </>

  )
}

export default ProjectDetails 