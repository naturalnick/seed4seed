import { useAuth } from "src/hooks/useAuth";

export default function Rooms({ rooms }) {
	const { userID } = useAuth();

	const roomItems = rooms.map((room) => (
		<p key={room.id}>
			{room.users[0].id !== userID
				? room.users[0].username
				: room.users[1].username}
		</p>
	));
	return <>{roomItems}</>;
}
