import { o as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import { n as getAuth } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase.mjs";
import { l as getFirestore } from "../_libs/@firebase/firestore+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/firebase-BZtSKUGz.js
var app = initializeApp({
	apiKey: "AIzaSyCbxKTcEcVycoONjQEt0zAF4I2qbJY1LC0",
	authDomain: "zentra-connect.firebaseapp.com",
	projectId: "zentra-connect",
	storageBucket: "zentra-connect.firebasestorage.app",
	messagingSenderId: "455943726644",
	appId: "1:455943726644:web:05474c2640bf8bb2124c61"
});
var auth = getAuth(app);
var db = getFirestore(app);
//#endregion
export { db as n, auth as t };
