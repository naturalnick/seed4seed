import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUser, loginUser } from "src/services/auth";
import { useAuth } from "src/hooks/useAuth";
import Input from "src/components/Input";
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Email is required"),
	username: Yup.string().required("Username is required").nullable(),
	country: Yup.string().required("Country is required").nullable(),
	password: Yup.string().required("Password is required"),
});

export default function Auth() {
	const { userID } = useAuth();
	const navigate = useNavigate();
	const [isRegistering, setIsRegistering] = useState(false);
	const [loading, setLoading] = useState(false);
	const {
		values,
		setValues,
		handleSubmit,
		handleChange,
		touched,
		errors,
		resetForm,
	} = useFormik({
		initialValues: {
			email: "",
			username: "",
			country: "",
			password: "",
		},
		onSubmit: handleLogin,
		validationSchema: loginSchema,
	});

	useEffect(() => {
		if (userID) navigate("/");
	}, [userID]);

	useEffect(() => {
		if (!isRegistering) {
			setValues((prev) => ({ ...prev, username: null, country: null }));
		} else {
			resetForm();
		}
	}, [isRegistering]);

	async function handleLogin(values) {
		try {
			setLoading(true);
			if (isRegistering) {
				await createUser(values);
			} else {
				await loginUser(values.email, values.password);
			}
		} catch (error) {
			console.log(error);
		} finally {
			navigate("/");
		}
	}
	return (
		<div className="p-4 flex flex-row justify-center">
			<div className="basis-2/3 md:basis-1/2 lg:basis-1/4 min-h-full p-3">
				<div className="bg-white rounded-lg border flex flex-col items-center text-center">
					<h3 className="w-full text-2xl font-semibold py-3 border-b">
						Sign {isRegistering ? "Up" : "In"}
					</h3>
					<form
						method="dialog"
						onSubmit={handleSubmit}
						className="px-5 py-3 flex flex-col gap-2"
					>
						<Input
							label="Email"
							type="email"
							name="email"
							value={values.email}
							error={errors.email}
							handleChange={handleChange}
						/>
						{isRegistering && (
							<>
								<Input
									label="Username"
									type="text"
									name="username"
									error={errors.username}
									value={values.username || ""}
									handleChange={handleChange}
								/>
								<Input
									label="Country"
									type="text"
									name="country"
									error={errors.country}
									value={values.country || ""}
									handleChange={handleChange}
								/>
							</>
						)}
						<Input
							label="Password"
							type="password"
							name="password"
							error={errors.password}
							value={values.password}
							handleChange={handleChange}
						/>

						<button
							type="submit"
							className="btn btn-primary rounded-full"
							disabled={loading}
						>
							Sign {isRegistering ? "Up" : "In"}
							{loading && (
								<span className="loading loading-dots loading-xs"></span>
							)}
						</button>

						<p className="mt-2">
							Not a member?{" "}
							<button
								type="button"
								className="underline"
								onClick={() => setIsRegistering((prev) => !prev)}
								disabled={loading}
							>
								Sign {isRegistering ? "In" : "Up"}
							</button>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
