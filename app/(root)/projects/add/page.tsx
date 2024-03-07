import ProjectForm from "@/components/shared/ProjectForm"
import { auth } from "@clerk/nextjs"

const AddProject = () => {

  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  return (
    <>
        <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10 ">
            <h3 className="wrapper h3-bold text-center sm:text-left">Add Project</h3>
        </section>

        <div className="wrapper my-8">
            <ProjectForm userId={userId} type="Add"/>
        </div>
    </>
  )
}

export default AddProject

