import { titleCase } from "src/utils";
import { plantGroups } from "src/data/plant-groups";

export default function PlantGroupSelect({
	plantGroup,
	setPlantGroup,
	hidden,
}) {
	const plantGroupItems = plantGroups.map((p) => (
		<div key={p.value} className="form-control px-3">
			<label className="label cursor-pointer">
				<span className="label-text">{titleCase(p.name)}</span>
				<input
					type="radio"
					name="radio-plant-group"
					className="radio"
					checked={plantGroup == p.value}
					onChange={() => setPlantGroup(p.value)}
				/>
			</label>
		</div>
	));
	return <div hidden={hidden}>{plantGroupItems}</div>;
}
