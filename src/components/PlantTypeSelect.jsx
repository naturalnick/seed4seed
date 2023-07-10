import { vegTypes } from "src/data/veg-types";
import { titleCase } from "src/utils";

export default function PlantTypeSelect({ plantType, handleChange, error }) {
	const plantTypeItems = vegTypes.map((vegType) => (
		<option key={vegType} value={vegType}>
			{titleCase(vegType)}
		</option>
	));
	return (
		<>
			<select
				className="select select-bordered w-full max-w-xs focus:outline-none"
				value={plantType}
				name="plantType"
				onChange={handleChange}
			>
				<option value="">Choose a plant type</option>
				{plantTypeItems}
			</select>
			<label className="label">
				<span className="label-text-alt text-red-600">{error}</span>
			</label>
		</>
	);
}
