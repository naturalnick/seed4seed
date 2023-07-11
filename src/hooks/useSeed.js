import { useEffect, useState } from "react";
import { getSeed } from "src/services/seeds";

export function useSeed(seedID) {
	const [seed, setSeed] = useState(undefined);

	useEffect(() => {
		(async () => {
			const res = await getSeed(seedID);
			setSeed(res);
		})();
	}, [seedID]);

	return seed;
}
