import { db } from "./firebase";
import {
  collection,
  query,
  orderBy,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  type DocumentData,
  type Timestamp,
} from "firebase/firestore";

export type Lead = {
  id: string;
  fullName: string;
  companyName: string;
  email: string;
  whatsapp: string;
  country: string;
  businessType: string;
  createdAt?: Timestamp;
  status?: string;
};

export type Contact = {
  id: string;
  fullName: string;
  companyName: string;
  email: string;
  whatsapp: string;
  country: string;
  businessType: string;
  message?: string;
  createdAt?: Timestamp;
  status?: string;
};

export async function fetchLeads(): Promise<Lead[]> {
  const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Lead));
}

export async function fetchContacts(): Promise<Contact[]> {
  const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Contact));
}

export async function deleteLead(id: string) {
  await deleteDoc(doc(db, "leads", id));
}

export async function deleteContact(id: string) {
  await deleteDoc(doc(db, "contacts", id));
}

export async function updateLeadStatus(id: string, status: string) {
  await updateDoc(doc(db, "leads", id), { status });
}

export async function updateContactStatus(id: string, status: string) {
  await updateDoc(doc(db, "contacts", id), { status });
}

export function formatTimestamp(ts: Timestamp | undefined): string {
  if (!ts) return "—";
  return ts.toDate().toLocaleString();
}

export function isAdminEmail(email: string | null): boolean {
  if (!email) return false;
  const adminEmails = ["admin@zentratrading.com", "fortuna@zentratrading.com"];
  return adminEmails.includes(email.toLowerCase());
}
