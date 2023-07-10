import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { fAuth } from "src/firebase";
import { addUser } from "./users";

export async function loginUser(email, password) {
	await signInWithEmailAndPassword(fAuth, email, password);
}

export async function createUser(user) {
	const res = await createUserWithEmailAndPassword(
		fAuth,
		user.email,
		user.password
	);

	await addUser({
		id: res.user.uid,
		email: user.email,
		username: user.username,
		country: user.country,
		bio: "",
		rating: null,
		verified: false,
	});
}

export async function logoutUser() {
	await signOut(fAuth);
}
