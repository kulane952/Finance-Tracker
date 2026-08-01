import {z} from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().email("Email must vaild"),
  password: z.string().min(8, "password must be at least 8 characters"),
});
