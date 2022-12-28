export const getTokens = () => {
	const tokens = JSON.parse(localStorage.getItem("tokens") as string)

	if (tokens) {
		return tokens
	}

	return undefined
}
