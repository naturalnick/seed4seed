import { useState } from "react";
import RegionSelect from "./RegionSelect";
import FilterSection from "./FilterSection";
import { vegTypes } from "src/data/veg-types";
import { gardenZones } from "src/data/zones";
import PlantGroupRadios from "./PlantGroupRadios";

export default function SeedFilter({
	region,
	setRegion,
	country,
	setCountry,
	maxDistance,
	setMaxDistance,
	plantGroup,
	setPlantGroup,
	plantTypes,
	setPlantTypes,
	zones,
	setZones,
}) {
	const [openSection, setOpenSection] = useState("");

	const vegItems = vegTypes.map((veg) => (
		<div key={veg} className="form-control">
			<label className="label cursor-pointer">
				<span className="label-text">{veg}</span>
				<input
					type="checkbox"
					checked={plantTypes.includes(veg)}
					className="checkbox checkbox-sm"
					onChange={(e) => handleTypeChecked(veg, e.target.checked)}
				/>
			</label>
		</div>
	));

	const zoneItems = gardenZones.map((zone) => (
		<div key={zone} className="form-control">
			<label className="label cursor-pointer">
				<span className="label-text">{zone}</span>
				<input
					type="checkbox"
					checked={zones.includes(zone)}
					className="checkbox checkbox-sm"
					onChange={(e) => handleTypeChecked(zone, e.target.checked)}
				/>
			</label>
		</div>
	));

	function handleTypeChecked(value, checked) {
		if (value === "all") {
			setPlantTypes([]);
			return;
		}

		if (checked && !plantTypes.includes(value)) {
			setPlantTypes((prevPlantTypes) => [...prevPlantTypes, value]);
		} else {
			setPlantTypes((prevPlantTypes) =>
				prevPlantTypes.filter((item) => item !== value)
			);
		}
	}

	function handleZoneChecked(value, checked) {
		if (value === "all") {
			setZones([]);
			return;
		}

		if (checked && !zoneItems.includes(value)) {
			setZones((prevZones) => [...prevZones, value]);
		} else {
			setZones((prevZones) => prevZones.filter((item) => item !== value));
		}
	}

	return (
		<div className="flex flex-col gap-3">
			<input
				type="text"
				placeholder="Search seeds..."
				className="input input-bordered w-full max-w-xs"
			/>
			<hr />
			<RegionSelect
				region={region}
				setRegion={setRegion}
				country={country}
				setCountry={setCountry}
				openSection={openSection}
				setOpenSection={setOpenSection}
				maxDistance={maxDistance}
				setMaxDistance={setMaxDistance}
			/>
			<hr />
			<FilterSection
				id="plant-group"
				label="Plant Group"
				openSection={openSection}
				setOpenSection={setOpenSection}
			/>
			<PlantGroupRadios
				plantGroup={plantGroup}
				setPlantGroup={setPlantGroup}
				hidden={openSection !== "plant-group"}
			/>
			<hr />
			<FilterSection
				id="plant-types"
				label="Plant Types"
				openSection={openSection}
				setOpenSection={setOpenSection}
			/>
			<div hidden={openSection !== "plant-types"} className="p-3">
				<div className="form-control">
					<label className="label cursor-pointer">
						<span className="label-text">All Types</span>
						<input
							type="checkbox"
							checked={plantTypes.length === 0}
							className="checkbox checkbox-sm"
							onChange={(e) =>
								handleTypeChecked("all", e.target.checked)
							}
						/>
					</label>
				</div>
				{vegItems}
			</div>
			<hr />
			<FilterSection
				id="zones"
				label="Garden Zones"
				openSection={openSection}
				setOpenSection={setOpenSection}
			/>
			<div hidden={openSection !== "zones"} className="p-3">
				<div className="form-control">
					<label className="label cursor-pointer">
						<span className="label-text">All Zones</span>
						<input
							type="checkbox"
							checked={zones.length === 0}
							className="checkbox checkbox-sm"
							onChange={(e) =>
								handleZoneChecked("all", e.target.checked)
							}
						/>
					</label>
				</div>
				{zoneItems}
			</div>
		</div>
	);
}
