import { FaSeedling } from "react-icons/fa";

export default function UserRating({ rating }) {
	return rating !== null ? (
		<div className="rating">
			{Array.from({ length: rating }, (_, index) => (
				<input
					key={index}
					type="radio"
					name="rating-2"
					className="mask mask-star-2 bg-orange-400 cursor-default"
					disabled
				/>
			))}
		</div>
	) : (
		<div className="flex items-center gap-2">
			<FaSeedling size={25} color="forestgreen" />{" "}
			<label className="label-text">NEW</label>
		</div>
	);
}
