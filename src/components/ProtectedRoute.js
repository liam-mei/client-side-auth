import React from "react"
import { Route, Redirect } from "react-router-dom"

export default function ProtectedRoute(props) {

	return (
		<div>
			<Route
				path={props.path}
				render={(renderProps) => {
					if (localStorage.getItem("token")) {
						return props.render()
					} else {
						return <Redirect to="/signin" />
					}
				}}
			/>
		</div>
	)
}
