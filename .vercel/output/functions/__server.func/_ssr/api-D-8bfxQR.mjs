import "../_libs/firebase.mjs";
import { i as serverTimestamp, n as collection, t as addDoc } from "../_libs/@firebase/firestore+[...].mjs";
import { n as db } from "./firebase-BZtSKUGz.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-D-8bfxQR.js
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
async function submitRegister(data) {
	return {
		success: true,
		id: (await addDoc(collection(db, "leads"), {
			...data,
			createdAt: serverTimestamp()
		})).id
	};
}
async function submitContact(data) {
	return {
		success: true,
		id: (await addDoc(collection(db, "contacts"), {
			...data,
			createdAt: serverTimestamp()
		})).id
	};
}
//#endregion
export { submitRegister as i, registerSchema as n, submitContact as r, contactSchema as t };
