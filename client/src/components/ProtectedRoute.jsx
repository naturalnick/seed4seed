import { Navigate } from "react-router-dom";
import { useAuth } from "src/hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
	const { userID } = useAuth();

	if (userID === null) {
		return <Navigate to="/" />;
	}

	return children;
};
