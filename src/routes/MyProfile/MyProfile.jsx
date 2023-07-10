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

export default function MyProfile() {
	const navigate = useNavigate();
	const { userID } = useAuth();
	const { username, bio, rating, location } = useUser(userID);
	const seeds = useSeeds(userID);
	const [addingSeed, setAddingSeed] = useState(true);

	if (userID === null) navigate("/");
	if (username === undefined) return <Loading />;
	return (
		<div className="p-4 grid md:grid-cols-2">
			<div className="p-3">
				<div className="bg-white rounded-lg p-4 border">
					<div className="flex justify-between">
						<p className="text-lg font-bold">My Profile</p>
						<p></p>
					</div>
					<div className="flex flex-col gap-3 p-2">
						<div className="flex justify-between">
							<FaUserCircle size={50} />
							<UserRating rating={rating} />
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Username</span>
							</label>
							<input
								type="text"
								id="email"
								value={username}
								disabled
								className="input input-bordered input-sm max-w-xs"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Location</span>
							</label>
							<input
								type="text"
								id="email"
								value={location}
								disabled
								className="input input-bordered input-sm max-w-xs"
							/>
						</div>
						<BioInput userID={userID} bio={bio} />
					</div>
				</div>
			</div>
			<div className="p-3">
				<NewSeed show={addingSeed} />

				<div className="bg-white rounded-lg p-4 border">
					<div className="flex justify-between">
						<p className="text-lg font-bold">My Pods</p>
						{!addingSeed && (
							<button
								type="button"
								className="btn btn-primary btn-sm rounded-full"
							>
								Add
							</button>
						)}
					</div>
					<NewSeed show={addingSeed} />
				</div>
			</div>
		</div>
	);
}
