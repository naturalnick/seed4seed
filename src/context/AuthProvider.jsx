import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import { fAuth } from "src/firebase";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
	const [userID, setUserID] = useState(undefined);
	const [email, setEmail] = useState(undefined);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(fAuth, async (user) => {
			setUserID(user?.uid ?? null);
			setEmail(user?.email ?? null);
		});
		return () => {
			unsubscribe();
		};
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
