import { z } from "zod";

export const projectFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  categoryId: z.string().min(1, 'Category is required'),
  description: z.string().min(30, 'Description is required').max(400, 'Description must be less than 400 characters'),
  imageUrl: z.string().min(1), // Image URL is initially optional since it will be added after upload
  url: z.string().url('Invalid URL format').min(1, 'Project URL is required'),
  codeUrl: z.string().url('Invalid URL format').min(1, 'GitHub URL is required'),
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
});