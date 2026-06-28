import { i as __toESM } from "../_runtime.mjs";
import { A as require_jsx_runtime, j as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import { i as signOut, n as onAuthStateChanged, r as signInWithEmailAndPassword, t as getAuth } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-B-_SJHvQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var auth = getAuth(initializeApp({
	apiKey: void 0,
	authDomain: void 0,
	projectId: void 0,
	storageBucket: void 0,
	messagingSenderId: void 0,
	appId: void 0
}));
var AuthContext = (0, import_react.createContext)({
	user: null,
	loading: true,
	login: async () => {},
	logout: async () => {}
});
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		return onAuthStateChanged(auth, (firebaseUser) => {
			setUser(firebaseUser);
			setLoading(false);
		});
	}, []);
	const login = async (email, password) => {
		await signInWithEmailAndPassword(auth, email, password);
	};
	const logout = async () => {
		await signOut(auth);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
			user,
			loading,
			login,
			logout
		},
		children
	});
}
var useAuth = () => (0, import_react.useContext)(AuthContext);
//#endregion
export { useAuth as n, AuthProvider as t };
