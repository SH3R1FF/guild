import { z } from "zod"

export const projectFormSchema = z.object({
    title: z.string().min(3, 'Title must be atleast 3 characters'),
    description: z.string().min(3, 'Description must be atleast 3 characters').max(400, 'Description must be less than 400 characters'),
    imageUrl: z.string(),
    categoryId: z.string(),
    url: z.string().url(),
    codeUrl: z.string().url(),
    creator: z.string().min(3, 'Creator must have atleast 3 characters'),
    email: z.string().email(),
})
  