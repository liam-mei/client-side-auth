import React from "react"
import axios from "axios"
import api from "../utils/api"

export default function Signin(props) {
	console.log("signin")
	const [error, setError] = React.useState("")
	const [user, setUser] = React.useState({
		email: "jane@doe.com",
		password: "abc123",
	})

	const handleChange = (event) => {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (e) => {
		console.log("handleSubmit props", props)
		e.preventDefault()
		api()
			.post("/signin", user)
			.then((res) => {
				localStorage.setItem("token", res.data.token)
				setUser({ email: "", password: "" })
				console.log(res.data.token)
				props.history.push("/account")
			})
			.catch((err) => {
				setError(err.response.data.message)
			})
	}
	return (
		<form onSubmit={handleSubmit}>
			{error && <div className="error">{error}</div>}
			<input
				type="email"
				name="email"
				placeholder="email"
				value={user.email}
				onChange={(e) => handleChange(e)}
			/>
			<input
				type="password"
				name="password"
				placeholder="password"
				value={user.password}
				onChange={(e) => handleChange(e)}
			/>

			<button type="submit">Sign In</button>
		</form>
	)
}
