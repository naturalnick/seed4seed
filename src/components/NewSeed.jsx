import { useFormik } from "formik";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useAuth } from "src/hooks/useAuth";
import { useUser } from "src/hooks/useUser";
import { addSeed } from "src/services/seeds";
import * as Yup from "yup";
import Input from "./Input";
import MetricSelect from "./MetricSelect";
import PlantGroupSelect from "./PlantGroupSelect";
import PlantTypeSelect from "./PlantTypeSelect";

const loginSchema = Yup.object().shape({
	plantGroup: Yup.string(),
	plantType: Yup.string(),
	variety: Yup.string().max(32, "Variety must not exceed 32 characters").required("Variety is required"),
	year: Yup.number("Must be a number")
		.test(
			"valid-year",
			"Invalid year",
			(year) => year > 2000 && year < new Date().getFullYear() 
		)
		.required("Harvest year is required"),
	desc: Yup.string(),
	quantity: Yup.number().required("Quantity is required"),
	metric: Yup.string("Metric is required"),
});

export default function NewSeed() {
	const { userID } = useAuth();
	const { username } = useUser(userID);
	const [open, setOpen] = useState(false);

	const [loading, setLoading] = useState(false);
	const {
		values: { plantGroup, plantType, variety, desc, year, quantity, metric },
		handleSubmit,
		handleChange,
		errors,
		resetForm,
	} = useFormik({
		initialValues: {
			plantGroup: "",
			plantType: "",
			variety: "",
			year: new Date().getFullYear(),
			desc: "",
			quantity: 0,
			metric: "count"
		},
		onSubmit: handleSave,
		validationSchema: loginSchema,
	});

	async function handleSave(values) {
		try {
			setLoading(true);
			await addSeed({ id: userID, username }, {
				...values,
				plantGroup: values.plantGroup || null,
				plantType: values.plantType || null,
			});
			resetForm();
			setOpen(false);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="bg-white rounded-lg p-4 border">
			<div className="flex justify-between items-center">
				<p className="text-lg font-semibold">New Seed</p>
				<button
					type="button"
					className="btn btn-ghost btn-circle btn-sm"
					onClick={() => setOpen((prev) => !prev)}
				>
					{open ? (
						<AiOutlineMinus size={20} />
					) : (
						<AiOutlinePlus size={20} />
					)}
				</button>
			</div>
			{open && (
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
						label="Variety/Name *"
						value={variety}
						type="text"
						name="variety"
						placeholder="eg. Sungold"
						handleChange={handleChange}
						error={errors.variety}
					/>
					<Input
						label="Harvest Year *"
						value={year}
						type="text"
						name="year"
						handleChange={handleChange}
						error={errors.year}
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
					<MetricSelect metric={metric} handleChange={handleChange} error={errors.metric} />
					<label className="label">
						<span className="label-text-alt text-red-600">
							{errors.desc}
						</span>
					</label>
					<button
						type="submit"
						disabled={loading}
						className="btn btn-primary min-w-[150px]"
					>
						Save
						{loading && (
							<span className="loading loading-dots loading-xs"></span>
						)}
					</button>
				</form>
			)}
		</div>
	);
}
