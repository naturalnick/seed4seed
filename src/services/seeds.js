import {
	doc,
	getDoc,
	serverTimestamp,
	setDoc,
	updateDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";

export async function addSeed(user, seed) {
	const seedID = uuidv4();

	await setDoc(doc(db, "seeds", seedID), {
		id: seedID,
		user: user,
		...seed,
		dateCreated: serverTimestamp(),
	});
}

export async function updateSeed(userID, changes) {
	await updateDoc(doc(db, "seeds", userID), {
		...changes,
	});
}

export async function getSeed(userID) {
	const docSnap = await getDoc(doc(db, "seeds", userID));
	return docSnap.exists() ? docSnap.data() : undefined;
}
