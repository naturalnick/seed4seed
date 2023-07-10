import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import PlantGroupSelect from "./PlantGroupSelect";
import PlantTypeSelect from "./PlantTypeSelect";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import { addSeed } from "src/services/seeds";
import { useUser } from "src/hooks/useUser";
import { useAuth } from "src/hooks/useAuth";

const loginSchema = Yup.object().shape({
	plantGroup: Yup.string().required("Plant group is required"),
	plantType: Yup.string().required("Plant type is required").nullable(),
	variety: Yup.string().required("Variety is required").nullable(),
	desc: Yup.string(),
});

export default function NewSeed() {
	const { userID } = useAuth();
	const { username } = useUser(userID);
	const [adding, setAdding] = useState(false);

	const [loading, setLoading] = useState(false);
	const {
		values: { plantGroup, plantType, variety, desc },
		handleSubmit,
		handleChange,
		touched,
		errors,
		resetForm,
	} = useFormik({
		initialValues: {
			plantGroup: "",
			plantType: "",
			variety: "",
			desc: "",
		},
		onSubmit: handleSave,
		validationSchema: loginSchema,
	});

	async function handleSave(values) {
		try {
			await addSeed({ id: userID, username }, values);
			resetForm();
			setAdding(false);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="bg-white rounded-lg p-4 border">
			<div className="flex justify-between">
				<p className="text-lg font-semibold">New Seed</p>
				<button
					type="button"
					className="btn btn-primary btn-circle btn-sm"
					onClick={() => setAdding((prev) => !prev)}
				>
					{adding ? (
						<AiOutlineMinus size={20} />
					) : (
						<AiOutlinePlus size={20} />
					)}
				</button>
			</div>
			{adding && (
				<form onSubmit={handleSubmit}>
					<label className="label">
						<span className="label-text">Plant Group</span>
					</label>
					<PlantGroupSelect
						plantGroup={plantGroup}
						handleChange={handleChange}
						error={errors.plantGroup}
					/>
					<label className="label">
						<span className="label-text">Plant Type</span>
					</label>
					<PlantTypeSelect
						plantType={plantType}
						handleChange={handleChange}
						error={errors.plantType}
					/>
					<Input
						label="Variety"
						value={variety}
						type="text"
						name="variety"
						placeholder="eg. Sungold"
						handleChange={handleChange}
						error={errors.variety}
					/>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Description</span>
						</label>
						<textarea
							className="textarea textarea-bordered h-24 focus:outline-none max-w-xs"
							placeholder="Days to maturity, disease resistance, etc..."
							value={desc}
							name="desc"
							onChange={handleChange}
						/>
					</div>
					<label className="label">
						<span className="label-text-alt text-red-600">
							{errors.desc}
						</span>
					</label>
					<button type="submit" className="btn btn-primary min-w-[150px]">
						Save
					</button>
				</form>
			)}
		</div>
	);
}
