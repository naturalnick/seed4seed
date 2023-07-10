import { titleCase } from "src/utils";
import { plantGroups } from "src/data/plant-groups";

export default function PlantGroupSelect({ plantGroup, handleChange, error }) {
	const plantGroupItems = plantGroups.map((p) => (
		<option key={p.value} value={p.value}>
			{titleCase(p.name)}
		</option>
	));
	return (
		<>
			<select
				className="select select-bordered w-full max-w-xs focus:outline-none"
				value={plantGroup}
				name="plantGroup"
				onChange={handleChange}
			>
				<option value="">Choose a plant group</option>
				{plantGroupItems}
			</select>
			<label className="label">
				<span className="label-text-alt text-red-600">{error}</span>
			</label>
		</>
	);
}
