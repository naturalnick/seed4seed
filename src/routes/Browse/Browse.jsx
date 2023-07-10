import { useState } from "react";
import SeedFilter from "src/components/SeedFilter";

export default function Browse() {
	const [region, setRegion] = useState("international");
	const [country, setCountry] = useState("US");
	const [maxDistance, setMaxDistance] = useState(100);
	const [plantGroup, setPlantGroup] = useState("");
	const [plantTypes, setPlantTypes] = useState([]);
	const [zones, setZones] = useState("");
	return (
		<div className="p-4 flex flex-row">
			<div className="basis-1/4 min-h-full p-3">
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
			<div className="basis-1/2 min-h-full p-3">
				<div className="bg-white rounded-lg p-4 border">
					<div className="flex justify-between">
						<p className="text-lg font-bold">Seeds</p>
						<p></p>
					</div>
				</div>
			</div>
			<div className="basis-1/4 min-h-full p-3">
				<div className="bg-white rounded-lg p-3 border">
					{" "}
					<p className="text-lg font-bold">Active Users</p>
				</div>
			</div>
		</div>
	);
}
