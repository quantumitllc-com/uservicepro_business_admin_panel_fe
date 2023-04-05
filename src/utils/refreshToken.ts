import axios from "axios"

import { baseURL } from "http/"
import { getTokens } from "./getTokens"
import { clearStorage } from "./clearStorage"

export const refreshToken = async () => {
	const tokens = getTokens()

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
		).then(res => {
			localStorage.setItem("tokens", JSON.stringify(res.data))
		}).catch((e) => {
			clearStorage()
			window.location.href = "/sign-in"
			console.log(e)
		})

		return response
}
