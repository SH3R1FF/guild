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

  const relatedProjects = await getRelatedProjectsByCategory({
    categoryId: project.category._id,
    projectId: project._id,
    page: searchParams.page as string,
  })
  

  return (
    <>
    <section className='flex justify-center bg-primary-50 bg-dotted-pattern bg-contain'>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <Image 
            src={project.imageUrl}
            alt="hero image"
            width={1000}
            height={1000}
            className="h-full min-h-[300px] object-cover object-center rounded-lg"
          /> 

          <div className='flex w-full flex-col gap-8 p-5 md:p-10'>
            <div className='flex flex-col gap-6'>
              <h2 className='h2-bold uppercase'>{project.title}</h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                
                    <p className="p-medium-16 rounded-full bg-[radial-gradient(100%_100%_at_top_left,#624cf5,#3634c7,#624cf5)] text-primary-50 px-4 py-2.5">
                      {project.category.name}
                    </p>
                </div>

                <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                  by{' '}
                  <span className="text-primary-500">{project.creator.firstName}</span>
                </p>

              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className='flex gap-2 md:gap-3 items-center'>
          
                <Clock color="#4252cd" width={22} height={22} className='h-[20px] w-[20px]'/>
                <div className="p-medium-14  lg:p-regular-18">
                  <p>Created at {formattedDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <Mail color="#4252cd" width={22} height={22} className='h-[20px] w-[20px]'/>
                <div className="p-medium-14 lg:p-regular-18">
                  <p>{project.email}</p>
                </div>
              </div>
            </div>


            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600">What You'll Discover:</p>
              <p className="p-medium-16 lg:p-regular-18 ">{project.description}</p>
            </div>

            <div className="flex items-center gap-2 md:gap-3 mt-4">

              <Button asChild className='bg-[radial-gradient(100%_100%_at_top_left,#624cf5,#3634c7,#624cf5)] hover:bg-primary-500/100 text-white'>
                <Link href={project.url} target='_blank'> 
                  <Link2 className="mr-2 h-5 w-5" /> Visit
                </Link>
              </Button>

              <Button asChild className='bg-neutral-800 hover:bg-neutral-700 text-white'>
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
          page={searchParams.page as string}
          totalPages={relatedProjects?.totalPages}
        />
    </section>
    
    </>

  )
}

export default ProjectDetails 