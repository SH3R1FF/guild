import { IProject } from '@/lib/database/models/project.model'
import React from 'react'
import { Card } from './Card'
import Pagination from './Pagination'


type CollectionProps = {
    data: IProject[],
    emptyTitle: string,
    emptyStateSubtext: string,
    limit: number,
    page: number | string,
    totalPages?: number,
    urlParamName?: string,
    collectionType?: 'Projects_Created'| 'All_Projects'
  }
  
const Collection = ({ 
    data,
    emptyTitle,
    emptyStateSubtext,
    page,
    totalPages = 0,
    collectionType,
    urlParamName,
}:CollectionProps) => {

  return (
    <>
        {data.length > 0 ? (
            <div className="flex flex-col items-center gap-10 ">
                <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">

                {data.map((project) => {

                    const hasCreationLink = collectionType === 'Projects_Created';
                    
                    return (
                        <li key={project._id} className="flex justify-center">
                            <Card project={project} hasCreationLink={hasCreationLink} />
                        </li>
                    ) 
                })}
                </ul>
  
                {totalPages > 1 && (
                    <Pagination urlParamName={urlParamName} page={page} totalPages={totalPages} />
                )}
          </div>
        ): (
            <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50
            dark:bg-neutral-900 dark:border dark:border-neutral-800 py-28 text-center">
                <h3 className="p-bold-20 md:h5-bold dark:text-neutral-400">{emptyTitle}</h3>
                <p className="p-regular-14 dark:text-neutral-600">{emptyStateSubtext}</p>
            </div>
        ) }
    </>
  )
}

export default Collection