export default function MetricSelect({ metric, handleChange, error }) {
	return (
		<>
			<select
				className="select select-bordered w-full max-w-xs focus:outline-none"
				value={metric}
				name="metric"
				onChange={handleChange}
			>
				<option value="">Choose a plant type</option>
				<option value="weight">Weight</option>
				<option value="each">Count (individual seeds)</option>
			</select>
			<label className="label">
				<span className="label-text-alt text-red-600">{error}</span>
			</label>
		</>
	);
}
