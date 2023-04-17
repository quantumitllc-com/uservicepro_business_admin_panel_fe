export const getInitialChatId = () => {
	const paths = window.location.pathname.split("/")
	return paths.length === 3 ? paths.at(-1) : ""
}
