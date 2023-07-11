import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";

export async function addChatRoom(sender, recipient) {
	const roomID = uuidv4();

	await setDoc(doc(db, "rooms", roomID), {
		id: roomID,
		users: [recipient, sender],
		dateCreated: serverTimestamp(),
	});
}

export async function addMessage(roomID, sender, message) {
	const messageID = uuidv4();

	await setDoc(doc(db, "rooms", roomID, "messages", messageID), {
		id: messageID,
		sender: sender,
		message: message,
		dateCreated: serverTimestamp(),
	});
}
