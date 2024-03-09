import { useEffect, useState } from "react";

export function useSeed(seedID) {
	const [seed, setSeed] = useState(undefined);

	useEffect(() => {
		(async () => {
			// custom hook to retrieve individual seed information
		})();
	}, [seedID]);

	return seed;
}
