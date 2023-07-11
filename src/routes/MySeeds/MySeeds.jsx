import { useNavigate } from "react-router-dom";
import Loading from "src/components/Loading";
import NewSeed from "src/components/NewSeed";
import SeedItem from "src/components/SeedItem";
import { useAuth } from "src/hooks/useAuth";
import { useSeeds } from "src/hooks/useSeeds";

export default function MySeeds() {
	const navigate = useNavigate();
	const { userID } = useAuth();
	const seeds = useSeeds(userID);

	if (userID === null) navigate("/");
	if (seeds === undefined) return <Loading />;

	const seedItems = seeds?.map((seed) => (
		<SeedItem
			key={seed.id}
			id={seed.id}
			plantGroup={seed.plantGroup}
			plantType={seed.plantType}
			variety={seed.variety}
			desc={seed.desc}
			user={seed.user}
			year={seed.year}
		/>
	));

	return (
		<div className="p-4 flex flex-wrap justify-center">
			<div className="p-3 basis-full lg:basis-2/4 xl:basis-2/4 order-2 lg:order-1">
				<div className="bg-white rounded-lg p-4 border min-h-[300px]">
					<div className="flex justify-between mb-2">
						<p className="text-lg font-semibold">My Pod</p>
					</div>
					{seedItems}
				</div>
			</div>
			<div className="p-3 basis-full lg:basis-2/4 xl:basis-1/4 order-1 lg:order-2">
				<NewSeed />
			</div>
		</div>
	);
}
