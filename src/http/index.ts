import axios from "axios"

const baseURL = process.env.REACT_APP_BASE_URL
const request = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json",
	},
})

export { request }
