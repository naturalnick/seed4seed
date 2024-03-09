import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import "./index.css";
import Auth from "./routes/Auth/Auth.jsx";
import Browse from "./routes/Browse/Browse.jsx";
import Messages from "./routes/Messages/Messages.jsx";
import MyProfile from "./routes/MyProfile/MyProfile.jsx";
import MySeeds from "./routes/MySeeds/MySeeds.jsx";
import Profile from "./routes/Profile/Profile.jsx";
import Root from "./routes/Root/Root.jsx";
import Seed from "./routes/Seed/Seed.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/login",
				element: <Auth />,
			},
			{
				path: "/browse",
				element: <Browse />,
			},
			{
				path: "/seed/:seedID",
				element: <Seed />,
			},
			{
				path: "/myprofile",
				element: (
					<ProtectedRoute>
						<MyProfile />
					</ProtectedRoute>
				),
			},
			{
				path: "/myseeds",
				element: (
					<ProtectedRoute>
						<MySeeds />
					</ProtectedRoute>
				),
			},
			{
				path: "/profile/:userID",
				element: (
					<ProtectedRoute>
						<Profile />
					</ProtectedRoute>
				),
			},
			{
				path: "/messages",
				element: (
					<ProtectedRoute>
						<Messages />
					</ProtectedRoute>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
