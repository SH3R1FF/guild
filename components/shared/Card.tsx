import { IProject } from '@/lib/database/models/project.model'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import {DeleteConfirmation} from './DeleteConfirmation'

type CardProps = {
    project: IProject,
    hasCreationLink?: boolean,
  }

export const Card = ({ project, hasCreationLink }: CardProps) => {

    const { sessionClaims } = auth()
    const userId = sessionClaims?.userId as string;

  const isProjectCreator = userId === project.creator._id.toString();

return (
    <div className='group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]'>
        <Link 
            href={`/projects/${project._id}`}
            style={{ backgroundImage: `url(${project.imageUrl})` }}
            className='flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"'
        />

        {/* IS isProjectCreator  ... */}

            {isProjectCreator  && (
                <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
                <Link href={`/projects/${project._id}/update`}>
                    <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
                </Link>

                    <DeleteConfirmation projectId={project._id} />
                </div>
            )}


            <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">

                <p className='p-semibold-14 w-fit rounded-full  bg-[radial-gradient(100%_100%_at_top_left,#624cf5,#3634c7,#624cf5)] text-primary-50 px-4 py-1 line-clamp-1'>{project.category.name}</p>


                <Link href={`/projects/${project._id}`}>
                    <p className='p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black'>{project.title}</p>
                </Link>


                <div className="flex flex-col w-full  ">

                    <p className='p-medium-14 md:p-medium-16 line-clamp-3 text-gray-500 '>
                        {project.description}
                    </p>

                    <p className="p-medium-14 md:p-medium-16 text-grey-600 pt-4">
                        Created by{' '}
                        <span className='text-primary-500'>
                            {project.creator.firstName}
                        </span>
                    </p>
                </div>

            </div>
        
    </div>
  )
}
