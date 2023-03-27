import axios from "axios"

import { baseURL } from "http/"
import { getTokens } from "./getTokens"
import { clearStorage } from "./clearStorage"

export const refreshToken = async () => {
	const tokens = getTokens()

	try {
		const response = await axios.post(
			"refresh_token",
			{},
			{
				baseURL,
				headers: {
					"Content-Type": "application/json",
					refreshToken: tokens.refreshToken
				}
			}
		)
		localStorage.setItem("tokens", JSON.stringify(response.data))
		return response
	} catch(e: any) {
		clearStorage()
		window.location.href = "/sign-in"
		console.log("Not Authorized")
	}

	return null
}