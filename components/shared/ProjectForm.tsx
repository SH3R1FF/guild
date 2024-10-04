"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { projectFormSchema } from "@/lib/validator"
import { z } from "zod"
import { projectDefaultValues } from "@/constants"
import Dropdown from "./Dropdown"
import { Textarea } from "@/components/ui/textarea"
import {FileUploader} from "./FileUploader"
import { useState } from "react"
import Image from "next/image"
import { useUploadThing } from "@/lib/uploadthing"
import { useRouter } from "next/navigation"
import { createProject, updateProject } from "@/lib/actions/project.actions"
import { IProject } from "@/lib/database/models/project.model"
import { Github, Loader2, Mail } from "lucide-react"

type ProjectFormProps = {
    userId: string
    type: "Add" | "Update"
    project?: IProject
    projectId?: string
}        


const ProjectForm = ({ userId, type, project, projectId }: ProjectFormProps ) => {
 
  const [files, setFiles] = useState<File[]>([])
  const initialValues = project && type === 'Update' 
  ? {
    ...project,
    // creator: project.creator._id,
  }
  : projectDefaultValues;

  const { startUpload } = useUploadThing('imageUploader')

  const router = useRouter()  

  const form = useForm<z.infer<typeof projectFormSchema>>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: initialValues
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof projectFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("Submit triggered"); // Debug log
    console.log("Form values:", values);

    let uploadedImageUrl = values.imageUrl;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);
      console.log("Uploaded images:", uploadedImages); // Check if images upload successfully
      
      if (!uploadedImages) {
        console.log("Upload failed");
        return;
      }
      uploadedImageUrl = uploadedImages[0].url;
    }

  

    if (type === "Add") {
      try {
        console.log("Attempting to create project...");
        const newProject = await createProject({
          userId,
          project: { ...values, imageUrl: uploadedImageUrl || '' },
          path: '/profile',
        });
  
        if (newProject) {
          console.log("Project created:", newProject);
          form.reset();
          router.push(`/projects/${newProject._id}`);
        }
      } catch (error) {
        console.error("Error creating project:", error);
      }
    }

    

    if(type === 'Update') {

      if(!projectId) {
        router.back()
        return;
      }

      try {
        const updatedProject = await updateProject({
          userId,
          project: { ...values, imageUrl: uploadedImageUrl || '', _id: projectId },
          path: `/projects/${projectId}`
        })

        if(updatedProject) {
          form.reset();
          router.push(`/projects/${updatedProject._id}`)
        }
      } catch (error) {
        console.log(error);
      }
    }

  
  }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">

      <div className="flex flex-col gap-5 md:flex-row  ">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                  <Input placeholder="Project Title" {...field} className="input-field max-sm:text-[16px]" value={field.value ?? ""}/>
              </FormControl> 
              <FormMessage />
            </FormItem>
          )}
          />
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem className="w-full ">
              <FormControl>
                <Dropdown onChangeHandler={field.onChange} value={field.value}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                    <Textarea placeholder="Description" {...field} className="textarea rounded-2xl max-sm:text-[15px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value ?? ''}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[55px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <Image
                      src='/assets/icons/link.svg'
                      alt="link"
                      width={24}
                      height={24}
                    />
                    <Input placeholder="Project Live URL" {...field} className="input-field text-primary max-sm:text-[13px] lg:text-[16px]" />
                  </div>

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name="codeUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[55px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
    
                    <Github 
                      className=" text-neutral-500"
                      width={24}
                      height={24}

                    />
                    <Input placeholder="Project Github URL" {...field} className="input-field text-primary max-sm:text-[13px] lg:text-[16px] "/>
                  </div>

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">

  

          <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[55px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                      <Mail className=" text-neutral-500" width={24}
                        height={24} />
                      <Input placeholder="Email Address" {...field} className="input-field max-sm:text-[13px] lg:text-[16px]" />
                    </div>

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
        
      
      </div>


      <Button 
        type="submit" 
        size='lg'
        disabled={form.formState.isSubmitting}
        className="button col-span-2 w-full bg-[radial-gradient(100%_100%_at_top_left,#624cf5,#3634c7,#624cf5)]"
        >
          {form.formState.isSubmitting ? (
            <div className="flex items-center justify-center ">
              
              Submitting 
              <Loader2 className="ml-2 h-4 w-4 animate-spin" />
              {/* "Submitting..." */}
            </div>
          ) : `${type} Project`
          
          }</Button>
    </form>
  </Form>
  )
}

export default ProjectForm