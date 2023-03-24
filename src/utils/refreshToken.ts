import axios from "axios"

import { baseURL } from "http/"
import { getTokens } from "./getTokens"

export const refreshToken = async () => {
	const tokens = getTokens()

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
}