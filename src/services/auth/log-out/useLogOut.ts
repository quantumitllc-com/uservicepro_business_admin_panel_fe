import { useNavigate } from "react-router-dom"

import { clearStorage } from "utils/clearStorage"
import { useSocket } from "hooks/useSocket"

export const useLogOut = () => {
	const navigate = useNavigate()
	const socket = useSocket()

	const onSubmit = () => {
		clearStorage()
		socket?.disconnect()
		navigate("/sign-in")
	}

	return { onSubmit }
}
