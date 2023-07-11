import { useLocation, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { PiCirclesThreeDuotone, PiPlantFill } from "react-icons/pi";

export default function SeedItem({
	id,
	variety,
	year,
	plantGroup,
	plantType,
	user,
}) {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<div
			key={id}
			className="border py-2 px-3 text-sm rounded-md bg-slate-50 flex gap-2 items-center"
		>
			<PiCirclesThreeDuotone size={48} />
			<div className="w-full space-y-1">
				<div className="flex flex-wrap justify-between items-center">
					<div>
						<span className="font-semibold text-base">{variety}</span>
					</div>
					<div className="font-semibold py-1 px-2 bg-green-100 rounded-md flex items-center gap-1">
						<PiPlantFill />
						{plantType} / {plantGroup}
					</div>
				</div>
				<div className="flex flex-wrap justify-between items-center">
					<p>{year}</p>
					{!location.pathname.includes("profile") &&
						!location.pathname.includes("myseeds") && (
							<button
								type="button"
								className="btn btn-xs"
								onClick={() => navigate(`/profile/${user.id}`)}
							>
								<FaUser />
								{user.username}
							</button>
						)}
					{location.pathname.includes("myseeds") && (
						<button
							type="button"
							className="btn btn-xs"
							onClick={() => navigate(`/myseeds/${id}`)}
						>
							Edit
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
