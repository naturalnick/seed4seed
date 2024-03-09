import { plantGroups } from "src/data/plant-groups";

export default function PlantGroupSelect({ plantGroup, handleChange, error }) {
	const plantGroupItems = plantGroups.map((plantGroup) => (
		<option key={plantGroup} value={plantGroup}>
			{plantGroup}
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
