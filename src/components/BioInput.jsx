import { useEffect, useState } from "react";

export default function BioInput({ userID, bio }) {
	const [newBio, setNewBio] = useState(bio);
	const [editing, setEditing] = useState(false);

	useEffect(() => {
		setEditing(bio !== newBio);
	}, [newBio]);

	async function handleSave() {
		try {
			//updateUser()
			setEditing(false);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="form-control">
			<label className="label">
				<span className="label-text">Bio</span>
				<span className="label-text-alt" hidden={!editing}>
					<button className="btn btn-sm" onClick={handleSave}>
						Save
					</button>
				</span>
			</label>
			<textarea
				className="textarea textarea-bordered h-24 focus:outline-none"
				placeholder=""
				value={newBio}
				onChange={(e) => setNewBio(e.target.value)}
			/>
		</div>
	);
}
