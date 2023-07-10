import {
	doc,
	getDoc,
	serverTimestamp,
	setDoc,
	updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export async function addUser(user) {
	await setDoc(doc(db, "users", user.id), {
		id: user.id,
		email: user.email,
		username: user.username,
		dateCreated: serverTimestamp(),
	});
}

export async function updateUser(userID, changes) {
	await updateDoc(doc(db, "users", userID), {
		...changes,
	});
}

export async function getUser(userID) {
	const docSnap = await getDoc(doc(db, "users", userID));
	return docSnap.exists() ? docSnap.data() : undefined;
}
