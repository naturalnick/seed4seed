import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function FilterSection({
	id,
	label,
	openSection,
	setOpenSection,
}) {
	function handleClick() {
		setOpenSection((prev) => (prev === id ? "" : id));
	}
	return (
		<div
			className="flex justify-between items-center py-2 px-3 hover:bg-gray-100 hover:rounded-md cursor-pointer"
			id={id}
			onClick={handleClick}
		>
			<p>{label}</p>
			{openSection === id ? <AiOutlineMinus /> : <AiOutlinePlus />}
		</div>
	);
}
