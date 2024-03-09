import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "src/components/Loading";
import { useSeed } from "src/hooks/useSeed";

export default function Seed() {
	const { seedID } = useParams();
	const seed = useSeed(seedID);
	const navigate = useNavigate();
	const location = useLocation();

	if (seed === undefined) return <Loading />;
	return (
		<div className="p-4 flex flex-row justify-center">
			<div className="basis-1/2 min-h-full p-3">
				<div className="bg-white rounded-lg p-4 border">
					<div className="flex flex-wrap justify-between items-center">
						<div>
							<span className="font-semibold">{seed.variety} </span>
							<span className="font-semibold">{seed.plantType}</span>
						</div>
						<div>
							<span className="font-semibold p-1 bg-green-100 rounded-md">
								{seed.plantGroup}
							</span>
						</div>
					</div>
					<div className="flex flex-wrap justify-between items-center">
						<>2022</>
						{!location.pathname.includes("profile") &&
							!location.pathname.includes("myseeds") && (
								<button
									type="button"
									className="btn btn-ghost btn-xs"
									onClick={() => navigate(`/profile/${seed.user.id}`)}
								>
									{seed.user.username}
								</button>
							)}
					</div>
				</div>
			</div>
		</div>
	);
}
