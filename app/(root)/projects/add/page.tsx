import ProjectForm from "@/components/shared/ProjectForm"
import { auth } from "@clerk/nextjs"
import { NotebookPen } from "lucide-react";

const AddProject = () => {

  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  console.log('User ID:', userId);

  return (
    <>
        <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10 ">
            <h3 className="wrapper h3-bold text-center sm:text-left">
              <div className="flex items-center gap-3">
                <NotebookPen className="text-white rounded-md p-2 h-10 w-10 bg-[radial-gradient(100%_100%_at_top_left,#624cf5,#3634c7,#624cf5)]"/>
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

