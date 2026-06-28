import { z } from "zod";
import { createServerFn } from "@tanstack/react-start";

export const registerSchema = z.object({
  fullName: z.string().min(1, "form.required"),
  companyName: z.string().min(1, "form.required"),
  email: z.string().min(1, "form.required").email("form.invalidEmail"),
  whatsapp: z.string().min(1, "form.required"),
  country: z.string().min(1, "form.required"),
  businessType: z.string().min(1, "form.required"),
});

export const contactSchema = z.object({
  fullName: z.string().min(1, "form.required"),
  companyName: z.string().min(1, "form.required"),
  email: z.string().min(1, "form.required").email("form.invalidEmail"),
  whatsapp: z.string().min(1, "form.required"),
  country: z.string().min(1, "form.required"),
  businessType: z.string().min(1, "form.required"),
  message: z.string().optional(),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type ContactInput = z.infer<typeof contactSchema>;

export const submitRegister = createServerFn({ method: "POST" })
  .validator((d: unknown) => registerSchema.parse(d))
  .handler(async ({ data }) => {
    console.log("[Register]", JSON.stringify(data, null, 2));
    return { success: true };
  });

export const submitContact = createServerFn({ method: "POST" })
  .validator((d: unknown) => contactSchema.parse(d))
  .handler(async ({ data }) => {
    console.log("[Contact]", JSON.stringify(data, null, 2));
    return { success: true };
  });
