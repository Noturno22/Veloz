import { z } from "zod";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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

export async function submitRegister(data: RegisterInput) {
  const docRef = await addDoc(collection(db, "leads"), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return { success: true, id: docRef.id };
}

export async function submitContact(data: ContactInput) {
  const docRef = await addDoc(collection(db, "contacts"), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return { success: true, id: docRef.id };
}
