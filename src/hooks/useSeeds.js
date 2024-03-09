import { useEffect, useState } from "react";

export function useSeeds(userID) {
	const [seeds, setSeeds] = useState(undefined);

	useEffect(() => {
		// get seeds from server/database
		setSeeds([
			{
				dateCreated: "July 9, 2023 at 9:49:49\u202fPM UTC-4",
				desc: "The best",
				id: "6b913627-b6b6-4fe2-9a20-55afb4cc00cc",
				plantGroup: "Vegetables",
				plantType: "Tomato",
				user: {
					id: "yDBWg5xBHxQ8fsKeIMxmYsxemwo1",
					username: "wildernns",
				},
				variety: "Sungold",
				year: 2023,
			},
		]);
	}, []);

	return seeds;
}
