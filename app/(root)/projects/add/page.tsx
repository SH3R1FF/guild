import ProjectForm from "@/components/shared/ProjectForm"
import { auth } from "@clerk/nextjs"
import { NotebookPen } from "lucide-react";

const AddProject = () => {

  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
    
  return (
    <>
        <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10 ">
            <h3 className="wrapper h3-bold text-center sm:text-left">
              <div className="flex items-center gap-3">
                <NotebookPen className="text-neutral-800 h-10 w-10"/>
                Add Project
              </div>
            </h3>
        </section>

        <div className="wrapper my-8">
            <ProjectForm userId={userId} type="Add"/>
        </div>
    </>
  )
}

export default AddProject

