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

function getFirestoreErrorMessage(err: unknown): string {
  const e = err as { code?: string } | null;
  if (e?.code === "permission-denied") return "Firestore access denied. Contact the administrator.";
  if (e?.code === "unavailable") return "Service temporarily unavailable. Please try again.";
  if (e?.code?.startsWith("auth/")) return "Authentication error. Please log in.";
  return "Network error. Check your connection and try again.";
}

export async function submitRegister(data: RegisterInput) {
  try {
    const docRef = await addDoc(collection(db, "leads"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (err) {
    throw new Error(getFirestoreErrorMessage(err));
  }
}

export async function submitContact(data: ContactInput) {
  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (err) {
    throw new Error(getFirestoreErrorMessage(err));
  }
}
