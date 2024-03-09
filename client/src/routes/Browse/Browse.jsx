import { useState } from "react";
import SeedFilter from "src/components/SeedFilter";
import SeedItem from "src/components/SeedItem";
import { useSeeds } from "src/hooks/useSeeds";

export default function Browse() {
	const seeds = useSeeds();
	const [region, setRegion] = useState("international");
	const [country, setCountry] = useState("US");
	const [maxDistance, setMaxDistance] = useState(100);
	const [plantGroup, setPlantGroup] = useState("");
	const [plantTypes, setPlantTypes] = useState([]);
	const [zones, setZones] = useState("");

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
		<div className="p-4 flex justify-center">
			<div className="basis-1/4 p-3">
				<div className="bg-white rounded-lg p-3 border">
					<SeedFilter
						region={region}
						setRegion={setRegion}
						country={country}
						setCountry={setCountry}
						maxDistance={maxDistance}
						setMaxDistance={setMaxDistance}
						plantGroup={plantGroup}
						setPlantGroup={setPlantGroup}
						plantTypes={plantTypes}
						setPlantTypes={setPlantTypes}
						zones={zones}
						setZones={setZones}
					/>
				</div>
			</div>
			<div className="basis-1/2 p-3">
				<div className="bg-white rounded-lg p-3 border">
					<div className="flex justify-between mb-2">
						<p className="text-lg font-bold">Seeds</p>
						<p></p>
					</div>
					{seedItems}
				</div>
			</div>
		</div>
	);
}
