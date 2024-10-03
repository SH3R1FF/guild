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
        <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10 ">
            <h3 className="wrapper h3-bold text-center sm:text-left">
            <div className="flex items-center gap-3">
                <NotebookPen className="text-neutral-800 h-10 w-10"/>
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