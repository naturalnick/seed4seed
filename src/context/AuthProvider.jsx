import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
	const [userID, setUserID] = useState(undefined);
	const [email, setEmail] = useState(undefined);

	useEffect(() => {
		// set auth state here from server
		setUserID("user");
		setEmail("email");
	}, []);

	return (
		<AuthContext.Provider
			value={{
				userID,
				email,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

AuthProvider.propTypes = {
	children: PropTypes.element,
};
