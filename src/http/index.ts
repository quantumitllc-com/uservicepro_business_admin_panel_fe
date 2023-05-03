import axios from "axios"

import { refreshToken } from "utils/refreshToken"
import { isExpiredToken } from "utils/isExpiredToken"
import { clearStorage } from "../utils/clearStorage"

export const baseURL = process.env.REACT_APP_BASE_URL
const request = axios.create({
	baseURL,
})

request.interceptors.request.use(async (config: any) => {
	const tokens = isExpiredToken()

	if (tokens) {
		if (!tokens.isExpiredAccess) {
			config.headers = {
				...config.headers,
				Authorization: `Bearer ${tokens.accessToken}`,
			}
		}

		if (tokens.isExpiredAccess) {
			await refreshToken()
		}

		if (tokens.isExpiredRefresh) {
			clearStorage()
			window.location.href = "/sign-in"
		}

		return config
	}
	return config
})

export { request }
