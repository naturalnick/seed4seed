import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BioInput from "src/components/BioInput";
import Loading from "src/components/Loading";
import UserRating from "src/components/UserRating";
import { useAuth } from "src/hooks/useAuth";
import { useUser } from "src/hooks/useUser";

export default function MyProfile() {
	const navigate = useNavigate();
	const { userID } = useAuth();
	const { username, bio, rating, location } = useUser(userID);

	if (userID === null) navigate("/");
	if (username === undefined) return <Loading />;
	return (
		<div className="p-4 flex justify-center">
			<div className="p-3 basis-full md:basis-3/4">
				<div className="bg-white rounded-lg p-4 border">
					<div className="flex justify-between">
						<p className="text-lg font-semibold">My Profile</p>
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
		</div>
	);
}
