import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./esm-I6x-3bX5.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-CU5pY-xE.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
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
var submitRegister_createServerFn_handler = createServerRpc({
	id: "87dfb7f63298b3c03a9c637efd80542bccf9f79e3179cdf7eb1b42544395e685",
	name: "submitRegister",
	filename: "src/lib/api.ts"
}, (opts) => submitRegister.__executeServer(opts));
var submitRegister = createServerFn({ method: "POST" }).validator((d) => registerSchema.parse(d)).handler(submitRegister_createServerFn_handler, async ({ data }) => {
	console.log("[Register]", JSON.stringify(data, null, 2));
	return { success: true };
});
var submitContact_createServerFn_handler = createServerRpc({
	id: "98b328bb0d4bee4eba5c2c641b9ba91c0267705fbaada521edac622cf0ac3b19",
	name: "submitContact",
	filename: "src/lib/api.ts"
}, (opts) => submitContact.__executeServer(opts));
var submitContact = createServerFn({ method: "POST" }).validator((d) => contactSchema.parse(d)).handler(submitContact_createServerFn_handler, async ({ data }) => {
	console.log("[Contact]", JSON.stringify(data, null, 2));
	return { success: true };
});
//#endregion
export { submitContact_createServerFn_handler, submitRegister_createServerFn_handler };
