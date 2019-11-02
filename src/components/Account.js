import React from "react"
import api from "../utils/api"

export default function Account(props) {

	console.log("Account Props", props)

	const [user, setUser] = React.useState({ name: "", email: "" })

	React.useEffect(() => {
		api()
			.get("/me")
			.then((res) => {
				console.log(res)
				setUser({ name: res.data.name, email: res.data.email })
			})
			.catch((err) => console.log("Error: ", err))
	}, [])
	return (
		<React.Fragment>
			<h1>My Account</h1>

			<div className="account-row">Name: {user.name}</div>
			<div className="account-row">Email: {user.email}</div>
		</React.Fragment>
	)
}
