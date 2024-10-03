// import Collection from '@/components/shared/Collection'
import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getProjectsByUser } from '@/lib/actions/project.actions'
import { SearchParamProps } from '@/types'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const ProfilePage = async ({ searchParams }: SearchParamProps) => {

    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;

    const projectsPage = Number(searchParams?.projectsPage) || 1;

    const createdProjects = await getProjectsByUser({ userId, page: projectsPage })
  return (
    <>
    {/* Projects Created */}
        <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
            <div className="wrapper flex items-center justify-center sm:justify-between">
            <h3 className='h3-bold text-center sm:text-left'>Projects Created by Me</h3>
            <Button asChild size="lg" className="button hidden sm:flex">
                <Link href="/projects/add">
                Create New Project
                </Link>
            </Button>
            </div>
        </section>

        <section className="wrapper my-8">
            <Collection 
                data={createdProjects?.data}
                emptyTitle="No projects have been created yet"
                emptyStateSubtext="Go create some now"
                collectionType="Projects_Created"
                limit={3}
                page={projectsPage}
                urlParamName="projectsPage"
                totalPages={createdProjects?.totalPages}
            />
        </section>
    </>
  )
}

export default ProfilePage