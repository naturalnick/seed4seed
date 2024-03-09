import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { TbOvalVertical } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

export default function SeedItem({
	id,
	variety,
	year,
	plantGroup,
	plantType,
	user,
	desc
}) {
	const navigate = useNavigate();
	const location = useLocation();

	const [descShown, setDescShown] = useState(false)

	return (
		<div
			key={id}
			className="border py-2 px-3 text-sm rounded-md bg-slate-50 flex gap-2 items-start"
		>
			<TbOvalVertical size={40} />
			<div className="w-full">
				<div className="flex flex-wrap justify-between items-center">
					<div className="text-slate-500">{year}</div>
					<div>
						{location.pathname.includes("myseeds") && (
							<button
								type="button"
								className="btn btn-xs"
								onClick={() => navigate(`/myseeds/${id}`)}
							>
								Edit
							</button>
						)}
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
						{!location.pathname.includes("myseeds") && (
							<button
								type="button"
								className="btn btn-xs"
								onClick={() => navigate(`/profile/${user.id}`)}
							>
								<IoMdAdd />
								Add to Bag
							</button>
						)}
					</div>
				</div>
				<div className="font-semibold text-base">
					{variety}
				</div>
				<div className="flex flex-wrap justify-between items-center">
					<div className="text-base text-slate-600">
						{plantType} / {plantGroup}
					</div>
					{desc && 
						<div>
							<button
								type="button"
								className="btn btn-xs btn-link"
								onClick={() => setDescShown(prevShown => !prevShown)}
							>
								{descShown ? "Hide" : "Show"} Details
							</button>
						</div>
					}
				</div>
				{descShown && 
					<div>
						<hr className="my-2"/>
						Description: {desc}
					</div>
				}
			</div>
		</div>
	);
}
