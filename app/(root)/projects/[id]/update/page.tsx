import ProjectForm from "@/components/shared/ProjectForm"
import { getProjectById } from "@/lib/actions/project.actions";
import { auth } from "@clerk/nextjs"
import { NotebookPen } from "lucide-react";


type UpdateProjectProps = {
  params: {
    id: string
  }
}

const UpdateProject = async ({ params: { id } } : UpdateProjectProps) => {

  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const project = await getProjectById(id)

  return (
    <>
        <section className="bg-primary-50 dark:bg-neutral-900 dark:border-neutral-800 border-b bg-cover bg-center py-5 md:py-10">
            <h3 className="wrapper h3-bold text-center sm:text-left">
            <div className="flex items-center gap-3">
                <NotebookPen className="text-white rounded-md p-2 h-10 w-10 bg-[radial-gradient(100%_100%_at_top_left,#624cf5,#3634c7,#624cf5)]"/>
                Update Project
            </div>
              
            </h3>
        </section>

        <div className="wrapper my-8">
            <ProjectForm 
              type="Update" 
              project={project}
              userId={userId} 
              projectId={project._id}
              />
        </div>
    </>
  )
}

export default UpdateProject