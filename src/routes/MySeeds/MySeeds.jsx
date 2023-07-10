import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BioInput from "src/components/BioInput";
import Loading from "src/components/Loading";
import NewSeed from "src/components/NewSeed";
import UserRating from "src/components/UserRating";
import { useAuth } from "src/hooks/useAuth";
import { useSeeds } from "src/hooks/useSeeds";
import { useUser } from "src/hooks/useUser";

export default function MySeeds() {
	const navigate = useNavigate();
	const { userID } = useAuth();
	const seeds = useSeeds(userID);

	if (userID === null) navigate("/");
	if (seeds === undefined) return <Loading />;

	const seedItems = seeds.map((seed) => (
		<div
			key={seed.id}
			className="border py-1 px-2 text-sm rounded-md bg-slate-50 flex justify-between items-center"
		>
			<div>
				<span className="font-semibold">{seed.variety} </span>
				<span className="font-semibold">{seed.plantType}</span>
			</div>
			<div>
				<span className="font-semibold p-1 bg-green-100 rounded-md">
					{seed.plantGroup}
				</span>
				<button type="button" className="btn btn-xs">
					Edit
				</button>
			</div>
		</div>
	));

	return (
		<div className="p-4 grid md:grid-cols-2">
			<div className="p-3">
				<div className="bg-white rounded-lg p-4 border min-h-[300px]">
					<div className="flex justify-between mb-2">
						<p className="text-lg font-semibold">My Pod</p>
					</div>
					{seedItems}
				</div>
			</div>
			<div className="p-3">
				<NewSeed />
			</div>
		</div>
	);
}
