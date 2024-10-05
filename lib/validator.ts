import { z } from "zod";

export const projectFormSchema = z.object({
  title: z.string().min(1, 'Title is required').min(2, 'Title should contain atleast 5 characters').max(100, 'Title must be less than 100 characters'),
  categoryId: z.string().min(1, 'Category is required'),
  description: z.string().min(150, 'Description should contain atleast 150 characters').max(400, 'Description must be less than 400 characters'),
  imageUrl: z.string().min(1), 
  // url: z.string().url('Invalid URL format').min(1, 'Project URL is required'),
  url: z.string().url('Invalid URL format').optional(),
  codeUrl: z.string().url('Invalid URL format').min(1, 'GitHub URL is required'),
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
});