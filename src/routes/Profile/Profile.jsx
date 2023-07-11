import { FaUserCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "src/components/Loading";
import SeedItem from "src/components/SeedItem";
import UserRating from "src/components/UserRating";
import { useAuth } from "src/hooks/useAuth";
import { useSeeds } from "src/hooks/useSeeds";
import { useUser } from "src/hooks/useUser";
import { formatDateAndTime } from "src/utils";

export default function Profile() {
	const navigate = useNavigate();
	const params = useParams();
	const { userID } = useAuth();
	const { username, bio, rating, location, dateCreated } = useUser(
		params.userID
	);
	const seeds = useSeeds(userID);

	if (userID === null) navigate("/");
	if (username === undefined) return <Loading />;

	const seedItems = seeds?.map((seed) => (
		<SeedItem
			key={seed.id}
			id={seed.id}
			plantGroup={seed.plantGroup}
			plantType={seed.plantType}
			variety={seed.variety}
			desc={seed.desc}
			user={seed.user}
		/>
	));

	return (
		<div className="p-4 flex justify-center">
			<div className="p-3 basis-1/4">
				<div className="bg-white rounded-lg p-6 border">
					<div className="space-y-3">
						<div className="flex justify-between">
							<p className="text-lg font-semibold">{username}</p>
							<UserRating rating={rating} />
						</div>
						<FaUserCircle size={50} />
						<div className="text-sm space-y-1">
							<p>{location}</p>
							<p>Member since {formatDateAndTime(dateCreated)}</p>
							<p>Last Trade {formatDateAndTime(dateCreated)}</p>
						</div>
						<div className="text-sm mt-3">
							<p className="font-semibold">Bio</p>
							<p>{bio}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="p-3 basis-2/4">
				<div className="bg-white rounded-lg p-4 border">
					<div className="flex justify-between mb-2">
						<p className="text-lg font-semibold">Seeds</p>
						<p></p>
					</div>
					{seedItems}
				</div>
			</div>
		</div>
	);
}
