import { useEffect, useState } from "react";

export function useScreenSize() {
	const [screenSize, setScreenSize] = useState(getCurrentDimension());

	useEffect(() => {
		const updateDimension = () => {
			setScreenSize(getCurrentDimension());
		};
		window.addEventListener("resize", updateDimension);

		return () => {
			window.removeEventListener("resize", updateDimension);
		};
	}, [screenSize]);

	function getCurrentDimension() {
		return {
			width: window.innerWidth,
			height: window.innerHeight,
		};
	}
	return screenSize;
}
