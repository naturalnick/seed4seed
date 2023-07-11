import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "src/hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutUser } from "src/services/auth";

export default function Nav() {
	const { userID } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<>
			<div className="navbar bg-white border-b">
				<div className="navbar-start">
					<Link to="/" className="btn btn-ghost normal-case text-xl">
						seed4seed
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<Link to="/browse">
								<p
									className={
										location.pathname === "/browse"
											? "border-b-2 border-black"
											: ""
									}
								>
									Browse Seeds
								</p>
							</Link>
						</li>
						<li>
							<Link to="/events">
								<p
									className={
										location.pathname === "/events"
											? "border-b-2 border-black"
											: ""
									}
								>
									Events
								</p>
							</Link>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					{userID ? (
						<div className="dropdown dropdown-end">
							<label
								tabIndex={0}
								className="btn btn-ghost btn-circle avatar"
							>
								<FaUserCircle size={28} />
							</label>
							<ul
								tabIndex={0}
								className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
							>
								<li className="lg:hidden">
									<a>Browse</a>
								</li>
								<li className="lg:hidden">
									<a>Events</a>
								</li>
								<li>
									<Link to="/myprofile">My Profile</Link>
								</li>
								<li>
									<Link to="/myseeds">My Seeds</Link>
								</li>
								<li>
									<Link to="/messages">Messages</Link>
								</li>
								<li>
									<Link to="/settings">Settings</Link>
								</li>
								<li>
									<button type="button" onClick={logoutUser}>
										Sign Out
									</button>
								</li>
							</ul>
						</div>
					) : (
						<button
							className="btn btn-primary btn-sm rounded-full"
							onClick={() => navigate("/login")}
						>
							Sign In
						</button>
					)}
				</div>
			</div>
		</>
	);
}
