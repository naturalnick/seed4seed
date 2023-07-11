import { useAuth } from "src/hooks/useAuth";
import { useScreenSize } from "src/hooks/useScreenSize";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import { useRooms } from "src/hooks/useRooms";
import { useNavigate } from "react-router-dom";
import Loading from "src/components/Loading";

export default function Messages() {
	const { userID } = useAuth();
	const navigate = useNavigate();
	const screenSize = useScreenSize();
	const rooms = useRooms(userID);
	const [newMessage, setNewMessage] = useState("");

	if (userID === null) navigate("/");
	if (rooms === undefined) return <Loading />;
	return (
		<div className="p-4 flex flex-wrap justify-center">
			<div className="basis:full md:basis-1/4 p-3">
				<div className="bg-white rounded-lg p-3 border">
					<p className="text-lg font-semibold">Chats</p>
				</div>
			</div>
			<div className="basis-full md:basis-1/2 p-3">
				<div
					className="bg-white rounded-lg p-3 border flex flex-col"
					style={{ height: screenSize.height - 200, minHeight: "500px" }}
				>
					<p className="text-lg font-semibold">Messages</p>
					<div className="flex-grow"></div>
					<div className="join">
						<input
							type="text"
							placeholder="Message"
							value={newMessage}
							onChange={(e) => setNewMessage(e.target.value)}
							className="input input-bordered w-full join-item focus:outline-none"
						/>
						<button className="btn btn-neutral join-item rounded-md">
							<FiSend size={24} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
