import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useUser(userID) {
	const navigate = useNavigate();
	const [username, setUsername] = useState(undefined);
	const [bio, setBio] = useState(undefined);
	const [rating, setRating] = useState(undefined);
	const [location, setLocation] = useState(undefined);
	const [dateCreated, setDateCreated] = useState(undefined);

	useEffect(() => {
		(async () => {
			if (userID === undefined) return;
			if (userID === null) return navigate("/");

			// const user = await getUser(userID);
			const user = {
				bio: "This is my bio",
				dateCreated: "July 9, 2023 at 3:47:26\u202fPM UTC-4",
				email: "wildernns@gmail.com",
				id: "yDBWg5xBHxQ8fsKeIMxmYsxemwo1",
				location: "Rockport, MA, US",
				mailingAddress: "",
				rating: 5,
				username: "wildernns",
				verified: false,
			};

			setUsername(user.username);
			setBio(user.bio);
			setRating(user.rating);
			setLocation(user.location);
			setDateCreated(user.dateCreated);
		})();
	}, [userID]);

	return { username, bio, rating, location, dateCreated };
}
