export default function Input({
	label,
	value,
	type,
	name,
	placeholder,
	handleChange,
	error,
}) {
	return (
		<div className="form-control w-full min-w-[250px]">
			<label className="label">
				<span className="label-text">{label}</span>
			</label>
			<input
				value={value}
				type={type}
				name={name}
				id={name}
				onChange={handleChange}
				placeholder={placeholder}
				className="input input-bordered w-full max-w-xs focus:outline-none"
			/>
			<label className="label">
				<span className="label-text-alt text-red-600">{error}</span>
			</label>
		</div>
	);
}
