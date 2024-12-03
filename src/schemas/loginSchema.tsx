import { z } from 'zod';

// Zod schema for validation
export const loginSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
});

// Infer form types from schema
export type LoginFormValues = z.infer<typeof loginSchema>;