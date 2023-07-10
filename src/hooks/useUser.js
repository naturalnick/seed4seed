import { useEffect, useState } from "react";
import { getUser } from "src/services/users";
import { useNavigate } from "react-router-dom";

export function useUser(userID) {
	const navigate = useNavigate();
	const [username, setUsername] = useState(undefined);
	const [bio, setBio] = useState(undefined);
	const [rating, setRating] = useState(undefined);
	const [location, setLocation] = useState(undefined);

	useEffect(() => {
		(async () => {
			if (userID === undefined) return;
			if (userID === null) return navigate("/");

			const user = await getUser(userID);

			setUsername(user.username);
			setBio(user.bio);
			setRating(user.rating);
			setLocation(user.location);
		})();
	}, [userID]);

	return { username, bio, rating, location };
}
