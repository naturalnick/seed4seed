import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "src/firebase";

export function useSeeds(userID) {
	const [seeds, setSeeds] = useState(undefined);

	useEffect(() => {
		const q = !userID
			? query(collection(db, "seeds"))
			: query(collection(db, "seeds"), where("user.id", "==", userID));

		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const seedData = [];
			querySnapshot.forEach((doc) => {
				seedData.push(doc.data());
			});
			setSeeds(seedData);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return seeds;
}
