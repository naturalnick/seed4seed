import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "src/firebase";

export function useRooms(userID) {
	const [messages, setMessages] = useState(undefined);

	useEffect(() => {
		if (!userID) return setMessages([]);

		const q = query(
			collection(db, "rooms"),
			where("users", "array-contains", userID)
		);

		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const messageData = [];
			querySnapshot.forEach((doc) => {
				messageData.push(doc.data());
			});
			setMessages(messageData);
		});

		return () => {
			unsubscribe();
		};
	}, [userID]);

	return messages;
}
