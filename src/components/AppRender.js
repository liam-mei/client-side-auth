import "./App.css"
import React from "react"
import { Link, Route, withRouter } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import { getToken } from "../utils/api"

import Signin from "./Signin"
import Account from "./Account"
import Logout from "./Logout"

function App(props) {
	return (
		<div className="wrapper">
			<nav>
				<Link to="/">Home</Link>
				{!getToken() && <Link to="/signin">Sign In</Link>}
				{getToken() && <Link to="/account">My Account</Link>}
				{getToken() && <Link to="/logout">Logout</Link>}
			</nav>

			<Route exact path="/signin" render={(props) => <Signin {...props} />} />
			<ProtectedRoute
				path="/account"
				render={(props) => <Account {...props} />}
				// component={Account}
				{...props} //Need to spread props for Router Props
			/>
			<ProtectedRoute
				path="/logout"
				render={(props) => <Logout {...props} />}
				{...props}
			/>
		</div>
	)
}

export default withRouter(App)
