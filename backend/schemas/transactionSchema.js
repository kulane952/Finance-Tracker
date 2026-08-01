import { z } from "zod";

export const transactionValidationSchema = z.object({
  title: z.string().min(1, "Title is required"),

  amount: z.number().positive("Amount must be greater than 0"),

  type: z.enum(["income", "expense"]),

    category: z.string().optional(),

  date: z.string().optional(),
});