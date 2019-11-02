import React from "react"
import { Route, Redirect } from "react-router-dom"

export default function ProtectedRoute(props) {

	console.log("PR props", props)
	const {component: Component, ...rest} = props

	return (
		<div>
			<Route
				{...rest}
				render={(renderProps) => {
					if (localStorage.getItem("token")) {
						console.log("there's token")
						return <Component {...renderProps} />
					} else {
						return <Redirect to="/signin" />
					}
				}}
			/>
		</div>
	)
}
