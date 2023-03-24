import { useNavigate } from "react-router-dom"

import { clearStorage } from "utils/clearStorage"
import { getSocket } from "utils/getSocket"

export const useLogOut = () => {
	const navigate = useNavigate()
	const socket = getSocket()

	const onSubmit = () => {
		clearStorage()
		socket.disconnect()
		navigate("/sign-in")
	}

	return { onSubmit }
}
