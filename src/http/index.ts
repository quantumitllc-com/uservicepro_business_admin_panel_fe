import axios from "axios"
import { getTokens } from "../utils/getTokens"
import { clearStorage } from "../utils/clearStorage"

const baseURL = process.env.REACT_APP_BASE_URL
const request = axios.create({
	baseURL,
})

request.interceptors.request.use((config: any) => {
	const tokens = getTokens()

	if (tokens) {
		config.headers = {
			...config.headers,
			Authorization: `Bearer ${tokens.accessToken}`,
		}
	}

	return config
})

request.interceptors.response.use(
	(config) => config,
	async (error) => {
		const tokens = getTokens()
		const originalRequest = error.config
		if (
			error.response.status === 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				const response = await axios.post(
					"refresh_token",
					{},
					{
						baseURL,
						headers: {
							"Content-Type": "application/json",
							refreshToken: tokens.refreshToken,
						},
					},
				)
				localStorage.setItem("tokens", JSON.stringify(response.data))
				return await request.request(originalRequest)
			} catch (e) {
				clearStorage()
				window.location.href = "/sign-in"
				// eslint-disable-next-line no-console
				console.log("Not Authorized")
			}
		}
		throw error
	},
)

export { request }
