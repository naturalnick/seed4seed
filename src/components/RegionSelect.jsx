import { titleCase } from "src/utils";
import FilterSection from "./FilterSection";
import { regions } from "src/data/regions";
import { countries } from "src/data/countries";

export default function RegionSelect({
	region,
	setRegion,
	country,
	setCountry,
	openSection,
	setOpenSection,
	maxDistance,
	setMaxDistance,
}) {
	const regionItems = regions.map((r) => (
		<RegionOption
			key={r}
			regionSelected={r}
			region={region}
			setRegion={setRegion}
			country={country}
			setCountry={setCountry}
			maxDistance={maxDistance}
			setMaxDistance={setMaxDistance}
		/>
	));

	return (
		<>
			<FilterSection
				id="region"
				label="Region"
				openSection={openSection}
				setOpenSection={setOpenSection}
			/>
			<div hidden={openSection !== "region"}>{regionItems}</div>
		</>
	);
}

function RegionOption({
	regionSelected,
	region,
	setRegion,
	country,
	setCountry,
	maxDistance,
	setMaxDistance,
}) {
	const countryItems = countries.map((country) => (
		<option key={country.code} value={country.code}>
			{country.name}
		</option>
	));

	return (
		<div className="form-control px-3">
			<label className="label cursor-pointer">
				<span className="label-text">{titleCase(regionSelected)}</span>
				<input
					type="radio"
					name="radio-region"
					className="radio"
					checked={region == regionSelected}
					onChange={() => setRegion(regionSelected)}
				/>
			</label>
			{regionSelected === "domestic" && region === "domestic" && (
				<select
					className="select w-full max-w-xs"
					value={country}
					onChange={(e) => setCountry(e.target.value)}
				>
					<option disabled selected>
						Choose your country
					</option>
					{countryItems}
				</select>
			)}
			{regionSelected === "local" && region === "local" && (
				<div className="flex flex-col gap-1 px-2">
					<small>(US only for now)</small>
					<input
						type="text"
						placeholder="Zip Code"
						className="input input-bordered input-sm w-full max-w-xs"
					/>
					<select
						className="select w-full max-w-xs"
						value={maxDistance}
						onChange={(e) => setMaxDistance(e.target.value)}
					>
						<option disabled selected>
							Distance
						</option>
						<option value={20}>20 miles</option>
						<option value={50}>50 miles</option>
						<option value={100}>100 miles</option>
					</select>
				</div>
			)}
		</div>
	);
}
