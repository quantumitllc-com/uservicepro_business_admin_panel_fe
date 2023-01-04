import { useNavigate } from "react-router-dom"

import { clearStorage } from "utils/clearStorage"

export const useLogOut = () => {
	const navigate = useNavigate()

	const onSubmit = () => {
		clearStorage()
		navigate("/sign-in")
	}

	return { onSubmit }
}
