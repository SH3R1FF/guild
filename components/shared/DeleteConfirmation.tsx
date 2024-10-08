'use client'

import { useTransition } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

import { deleteProject } from '@/lib/actions/project.actions'

export const DeleteConfirmation = ({ projectId }: { projectId: string }) => {
  const pathname = usePathname()
  let [isPending, startTransition] = useTransition()

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Image src="/assets/icons/delete.svg" alt="edit" width={20} height={20} />
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-white dark:bg-neutral-900 dark:border dark:border-neutral-800">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
          <AlertDialogDescription className="p-regular-16 text-neutral-400">
            This will permanently delete this project
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel className="dark:bg-neutral-900 dark:border-neutral-800">Cancel</AlertDialogCancel>

          <AlertDialogAction
            className="bg-[radial-gradient(100%_100%_at_top_left,#624cf5,#3634c7,#624cf5)] text-white px-8"
            onClick={() =>
              startTransition(async () => {
                await deleteProject({ projectId, path: pathname })
              })
            }>
            {isPending ? 'Deleting...' : 'Delete'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}