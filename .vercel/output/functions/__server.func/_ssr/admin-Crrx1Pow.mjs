import "../_libs/firebase.mjs";
import { a as query, c as doc, i as orderBy, n as deleteDoc, o as updateDoc, r as getDocs, s as collection } from "../_libs/@firebase/firestore+[...].mjs";
import { n as db } from "./firebase-BZtSKUGz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Crrx1Pow.js
async function fetchLeads() {
	return (await getDocs(query(collection(db, "leads"), orderBy("createdAt", "desc")))).docs.map((d) => ({
		id: d.id,
		...d.data()
	}));
}
async function fetchContacts() {
	return (await getDocs(query(collection(db, "contacts"), orderBy("createdAt", "desc")))).docs.map((d) => ({
		id: d.id,
		...d.data()
	}));
}
async function deleteLead(id) {
	await deleteDoc(doc(db, "leads", id));
}
async function deleteContact(id) {
	await deleteDoc(doc(db, "contacts", id));
}
async function updateLeadStatus(id, status) {
	await updateDoc(doc(db, "leads", id), { status });
}
async function updateContactStatus(id, status) {
	await updateDoc(doc(db, "contacts", id), { status });
}
function formatTimestamp(ts) {
	if (!ts) return "—";
	return ts.toDate().toLocaleString();
}
function isAdminEmail(email) {
	if (!email) return false;
	return ["admin@zentratrading.com", "fortuna@zentratrading.com"].includes(email.toLowerCase());
}
//#endregion
export { formatTimestamp as a, updateLeadStatus as c, fetchLeads as i, deleteLead as n, isAdminEmail as o, fetchContacts as r, updateContactStatus as s, deleteContact as t };
