import axios from "axios"

export default function() {
	return axios.create({
		baseURL: "http://localhost:8080",
		headers: { Authorization: localStorage.getItem("token") },
	})
}

export function getToken() {
  return localStorage.getItem('token')
}