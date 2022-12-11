import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDRBx_S0TwOiBgpKDyIkaSSciy471iYIvE",
	authDomain: "tesla-27ca0.firebaseapp.com",
	projectId: "tesla-27ca0",
	storageBucket: "tesla-27ca0.appspot.com",
	messagingSenderId: "995037511208",
	appId: "1:995037511208:web:19acbb1e3fa71253f5bf1d",
	measurementId: "G-1MV6Q3H6JF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
