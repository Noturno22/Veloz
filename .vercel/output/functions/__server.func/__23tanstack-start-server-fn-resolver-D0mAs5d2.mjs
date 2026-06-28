//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-D0mAs5d2.js
var manifest = {
	"87dfb7f63298b3c03a9c637efd80542bccf9f79e3179cdf7eb1b42544395e685": {
		functionName: "submitRegister_createServerFn_handler",
		importer: () => import("./_ssr/api-CU5pY-xE.mjs")
	},
	"98b328bb0d4bee4eba5c2c641b9ba91c0267705fbaada521edac622cf0ac3b19": {
		functionName: "submitContact_createServerFn_handler",
		importer: () => import("./_ssr/api-CU5pY-xE.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
