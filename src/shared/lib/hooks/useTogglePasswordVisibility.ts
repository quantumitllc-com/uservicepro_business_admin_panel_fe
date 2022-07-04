import { useState } from "react"

const useTogglePasswordVisibility = () => {
	const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false)

	const handlePasswordVisibility = () => {
		setPasswordVisibility(!passwordVisibility)
	}

	return {
		passwordVisibility,
		handlePasswordVisibility
	}
}

export default useTogglePasswordVisibility