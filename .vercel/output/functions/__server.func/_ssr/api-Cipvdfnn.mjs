import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./esm-I6x-3bX5.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-D0mAs5d2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-Cipvdfnn.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
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
var submitRegister = createServerFn({ method: "POST" }).validator((d) => registerSchema.parse(d)).handler(createSsrRpc("87dfb7f63298b3c03a9c637efd80542bccf9f79e3179cdf7eb1b42544395e685"));
var submitContact = createServerFn({ method: "POST" }).validator((d) => contactSchema.parse(d)).handler(createSsrRpc("98b328bb0d4bee4eba5c2c641b9ba91c0267705fbaada521edac622cf0ac3b19"));
//#endregion
export { submitRegister as i, registerSchema as n, submitContact as r, contactSchema as t };
