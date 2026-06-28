import "../_libs/firebase.mjs";
import { s as collection, t as addDoc, u as serverTimestamp } from "../_libs/@firebase/firestore+[...].mjs";
import { n as db } from "./firebase-BZtSKUGz.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-gHQS2iF6.js
var registerSchema = objectType({
	fullName: stringType().min(1, "form.required"),
	companyName: stringType().min(1, "form.required"),
	email: stringType().min(1, "form.required").email("form.invalidEmail"),
	whatsapp: stringType().min(1, "form.required"),
	country: stringType().min(1, "form.required"),
	businessType: stringType().min(1, "form.required")
});
var contactSchema = objectType({
	fullName: stringType().min(1, "form.required"),
	companyName: stringType().min(1, "form.required"),
	email: stringType().min(1, "form.required").email("form.invalidEmail"),
	whatsapp: stringType().min(1, "form.required"),
	country: stringType().min(1, "form.required"),
	businessType: stringType().min(1, "form.required"),
	message: stringType().optional()
});
function getFirestoreErrorMessage(err) {
	const e = err;
	if (e?.code === "permission-denied") return "Firestore access denied. Contact the administrator.";
	if (e?.code === "unavailable") return "Service temporarily unavailable. Please try again.";
	if (e?.code?.startsWith("auth/")) return "Authentication error. Please log in.";
	return "Network error. Check your connection and try again.";
}
async function submitRegister(data) {
	try {
		return {
			success: true,
			id: (await addDoc(collection(db, "leads"), {
				...data,
				createdAt: serverTimestamp()
			})).id
		};
	} catch (err) {
		throw new Error(getFirestoreErrorMessage(err));
	}
}
async function submitContact(data) {
	try {
		return {
			success: true,
			id: (await addDoc(collection(db, "contacts"), {
				...data,
				createdAt: serverTimestamp()
			})).id
		};
	} catch (err) {
		throw new Error(getFirestoreErrorMessage(err));
	}
}
//#endregion
export { submitRegister as i, registerSchema as n, submitContact as r, contactSchema as t };
