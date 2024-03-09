import { plantGroups } from "src/data/plant-groups";

export default function PlantGroupSelect({
	plantGroup,
	setPlantGroup,
	hidden,
}) {
	const plantGroupItems = plantGroups.map((pg) => (
		<div key={pg} className="form-control px-3">
			<label className="label cursor-pointer">
				<span className="label-text">{pg}</span>
				<input
					type="radio"
					name="radio-plant-group"
					className="radio"
					checked={pg == plantGroup}
					onChange={() => setPlantGroup(pg)}
				/>
			</label>
		</div>
	));
	return <div hidden={hidden}>{plantGroupItems}</div>;
}
